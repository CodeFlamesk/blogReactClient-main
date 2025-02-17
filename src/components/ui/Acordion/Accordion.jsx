import React, { useState, useRef, useEffect, useCallback } from 'react';
import './CustomSelect.css';
import ArrowDown from '../icons/ArrowDown';

const CustomSelect = ({ options, styles, text, styleheader, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    // Використовуємо useCallback для оптимізації функції перемикання
    const toggleDropdown = useCallback(() => {
        setIsOpen((prevOpen) => !prevOpen);
    }, []);

    // Функція вибору опції, яка також викликає callback для батьківського компонента
    const handleOptionSelect = useCallback(
        (option) => {
            setSelectedOption(option);
            setIsOpen(false);
            if (onSelect) {
                onSelect(option);
            }
        },
        [onSelect]
    );

    // Закриваємо селект при кліку поза його областю
    const handleClickOutside = useCallback((event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    // Обчислюємо стилі для заголовка
    const headerStyle = {
        color: selectedOption ? selectedOption.value : "#B6A1D3",
        borderColor: selectedOption ? selectedOption.value : "#B6A1D3",
    };

    return (
        <div className="custom-select" ref={dropdownRef}>
            <div
                className={styleheader}
                onClick={toggleDropdown}
                style={headerStyle}
            >
                {selectedOption ? selectedOption.label : text}
                <span className={`custom-select__arrow ${isOpen ? 'open' : ''}`}>
                    <ArrowDown />
                </span>
            </div>
            {isOpen && (
                <ul className={styles}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="custom-select__option"
                            onClick={() => handleOptionSelect(option)}
                            style={{ color: option.value }}
                        >
                            {selectedOption?.value === option.value && (
                                <span className="selected-option">
                                    <ArrowDown />
                                </span>
                            )}
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
