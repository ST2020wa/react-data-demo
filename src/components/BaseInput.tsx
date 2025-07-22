import { Input, Layout } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

interface BaseInputProps {
    titleLevel?: 5 | 1 | 2 | 3 | 4 | undefined;
    title?: string;
    inputSize?: "small" | "middle" | "large";
    inputType?: "text" | "password" | "email" | "number";
    placeholder?: string;
}

export function BaseInput({titleLevel = 5, title: titleText = "Title", inputSize = "large", inputType = "text", placeholder = ""}: BaseInputProps) {
    return (
        <div style={{ margin: '20px' }}>
            <Title level={titleLevel}>{titleText}</Title>
            <Input size={inputSize} type={inputType} placeholder={placeholder} />
        </div>
    )
}