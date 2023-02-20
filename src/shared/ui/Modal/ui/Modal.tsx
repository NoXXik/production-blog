import React, {
    ButtonHTMLAttributes,
    FC,
    ReactNode, useCallback, useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const TIMEOUT_DELAY = 200;

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeoutRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, TIMEOUT_DELAY);
        }
    }, [onClose]);
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeoutRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
