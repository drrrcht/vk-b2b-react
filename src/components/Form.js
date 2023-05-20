import React, { useState } from "react";
import "./Form.css";
import Select from "react-select";


const options3 = [
    { value: "a", label: "A" },
    { value: "b", label: "B" },
];

const options4 = [];
for (let i = 3; i < 28; i++) {
    options4.push({ value: i, label: i });
}

const options2 = [];
for (let i = 1; i < 13; i++) {
    options2.push({ value: i, label: i });
}

export const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        fullName: "",
        tower: "",
        floor: "",
        room: "",
        date: "",
        timeStart: "",
        timeEnd: "",
        comment: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSelectChangeSelect = (selectedOption, { name }) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: selectedOption,
        }));
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const myFormData = new FormData(event.target);

        const formDataObj = Object.fromEntries(myFormData.entries());

        let str = JSON.stringify(formDataObj);
        console.log(str);
    };

    const handleFormClear = () => {
        setFormData({
            firstName: "",
            lastName: "",
            fullName: "",
            tower: "",
            floor: "",
            room: "",
            date: "",
            timeStart: "",
            timeEnd: "",
            comment: "",
        });
    };

    return (
        <form id="sign-up-form" onSubmit={handleFormSubmit}>
            <header className="sign-up-form__header">
                <h2>Бронирование переговорок</h2>
            </header>

            <div className="sign-up-form__fields">
                <div className="field | js-field">
                    <label className="field__label" htmlFor="first-name">
                        Фамилия <sup>*</sup>
                    </label>
                    <div className="field__input">
                        <input
                            required
                            type="text"
                            id="first-name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Фамилия"
                        />
                    </div>
                </div>

                <div className="field | js-field">
                    <label className="field__label" htmlFor="last-name">
                        Имя <sup>*</sup>
                    </label>
                    <div className="field__input">
                        <input
                            required
                            type="text"
                            id="last-name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Имя"
                        />
                    </div>
                </div>

                <div className="field | js-field">
                    <label className="field__label" htmlFor="full-name">
                        Отчество
                    </label>
                    <div className="field__input">
                        <input
                            type="text"
                            id="full-name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Отчество"
                        />
                    </div>
                </div>

                <div className="field | js-field">
                    <label className="field__label" htmlFor="tower">
                        Выбор башни<sup>*</sup>
                    </label>
                    <Select options={options3} styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                minHeight: "4rem",
                                padding: "0",
                                border: "1px solid #ECEDEF",
                                borderRadius: "1.2rem",
                                backgroundColor: "#F7F7F7",
                            }),
                        }}
                                placeholder={"Башни"}
                                name={"tower"}
                                value={formData.tower}
                            onChange={handleSelectChangeSelect}
                    />

                    <div className="field | js-field">
                        <label className="field__label" htmlFor="floor">Выбор этажа<sup>*</sup></label>
                        <Select options={options4} styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                minHeight: "4rem",
                                padding: "0",
                                border: "1px solid #ECEDEF",
                                borderRadius: "1.2rem",
                                backgroundColor: "#F7F7F7",
                            }),
                        }}
                                placeholder={"Этажи"}
                                name={"floor"}
                                value={formData.floor}
                        onChange={handleSelectChangeSelect}
                        />
                    </div>
                    <div className="field | js-field">
                        <label className="field__label" htmlFor="room">Выбор переговорки<sup>*</sup></label>
                        <Select options={options2} styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                minHeight: "4rem",
                                padding: "0",
                                border: "1px solid #ECEDEF",
                                borderRadius: "1.2rem",
                                backgroundColor: "#F7F7F7",
                            }),
                        }}
                                placeholder={"Переговорки"}
                                name={"room"}
                                value={formData.room}
                                onChange={handleSelectChangeSelect}

                        />
                    </div>
                    <label className="field__label" htmlFor="floor">Выбор дня<sup>*</sup></label>
                    <div className="field__input">
                        <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange}/>
                    </div>
                    <div className="field | js-field">
                        <label className="field__label" htmlFor="time-start">Время начала<sup>*</sup></label>
                        <div className="field__input">
                            <input required type="time" id="time-start" name="timeStart" value={formData.timeStart} onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="field | js-field">
                        <label className="field__label" htmlFor="time-end">Время окончания<sup>*</sup></label>
                        <div className="field__input">
                            <input required type="time" id="time-end" name="timeEnd" value={formData.timeEnd} onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="field | js-field">
                        <label className="field__label" htmlFor="comment">Комментарий<sup>*</sup></label>
                        <div className="field__input">
                            <textarea id="comment" name="comment" value={formData.comment} onChange={handleInputChange} rows="4" cols="50" maxLength="500" placeholder="Комментарий"></textarea>
                        </div>
                    </div>

                    <div className="sign-up-form__footer wrapper_fio">
                        <button className="sign-up-form__button sign-up-form__button_type_submit btn _accent">Забронировать</button>
                        <button className="sign-up-form__button sign-up-form__button_type_reset btn _accent" onClick={handleFormClear}>Очистить форму</button>
                    </div>
                </div>
            </div>
        </form>
)};







