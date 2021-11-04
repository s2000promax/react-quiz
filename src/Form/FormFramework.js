export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

export function validate(value, validation = null) {
    if (!validation) { return true}

    let isValid = true

    if (validation.required) {
        isValid = value.trim() !== '' && isValid  
    }

    return isValid
}

export function validateForm(fromControls) {
    let isFormValid = true

    for (let control in fromControls){
        if (fromControls.hasOwnProperty(control)) {
            isFormValid = fromControls[control].valid && isFormValid
        }
    }
 
    return isFormValid
}

