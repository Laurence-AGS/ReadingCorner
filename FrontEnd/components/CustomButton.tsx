import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]): ViewStyle => {
    switch (variant) {
        case "secondary":
            return styles.bgSecondary;
        case "danger":
            return styles.bgDanger;
        case "success":
            return styles.bgSuccess;
        case "outline":
            return styles.bgOutline;
        default:
            return styles.bgPrimary;
    }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]): TextStyle => {
    switch (variant) {
        case "primary":
            return styles.textPrimary;
        case "secondary":
            return styles.textSecondary;
        case "danger":
            return styles.textDanger;
        case "success":
            return styles.textSuccess;
        default:
            return styles.textDefault;
    }
};

const CustomButton = ({ onPress, title, bgVariant = "primary", textVariant = "default", IconLeft, IconRight, ...props }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, getBgVariantStyle(bgVariant)]} {...props}>
            {IconLeft && <IconLeft />}
            <Text style={[styles.text, getTextVariantStyle(textVariant)]}>{title}</Text>
            {IconRight && <IconRight />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "100%",
        borderRadius: 9999,
        padding: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    bgPrimary: {
        backgroundColor: "#705C53",
    },
    bgSecondary: {
        backgroundColor: "gray",
    },
    bgDanger: {
        backgroundColor: "red",
    },
    bgSuccess: {
        backgroundColor: "green",
    },
    bgOutline: {
        backgroundColor: "transparent",
        borderColor: "#D0D5DD",
        borderWidth: 0.5,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    textPrimary: {
        color: "black",
    },
    textSecondary: {
        color: "gray",
    },
    textDanger: {
        color: "red",
    },
    textSuccess: {
        color: "green",
    },
    textDefault: {
        color: "white",
    },
});

export default CustomButton;
