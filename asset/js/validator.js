function Validator(formSelector) {

    const myForm = document.querySelector(formSelector)
    const rules = {}

    //
    //
    const rulesDefined = {
        requite: function(value) {
            return value ? undefined : 'Bạn cần nhập trường này.'
        },

        email: function(value) { 
            return value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ? undefined : 'Bạn cần nhập địa chỉ email.'
        },

        emailconfirm: function(emailSelector) {
            return function(value) {
                let email = myForm.querySelector(emailSelector).value
                return email === value ? undefined : 'Bạn cần nhập lại đúng địa chỉ email.'
            }
        },
        min: function(number) {
            return function(value) {
                return value.length >= number ? undefined : `Bạn cần nhập ít nhất ${number} ký tự.`
            }
        },
        number: function(numberRange) {
            return function(value) {
                let number = numberRange.split('-')
                return (value >= Number(number[0])) && (value <= Number(number[1])) ? undefined : `Bạn cần nhập giá trị từ ${number[0]} đến ${number[1]}.`
            }
        },
        value: function() {
            return undefined
        }
    }

    //INIT RULES
    //get all rules on form input
    let inputElements = myForm.querySelectorAll('input[rules]')

    for (let inputElement of inputElements) {
        
        if (inputElement.id) {
            rules['#'+inputElement.id] = getArrayRule(inputElement.getAttribute('rules'))
        }

        if (inputElement.name) {
            rules[`input[name="${inputElement.name}"]`] = getArrayRule(inputElement.getAttribute('rules'))
        }

    }

    //get all rules on form select
    let selectElements = myForm.querySelectorAll('select[rules]')

    for (let selectElement of selectElements) {
        
        if (selectElement.id) {
            rules['#'+selectElement.id] = getArrayRule(selectElement.getAttribute('rules'))
        }
    }

    // console.log(rules)

    //
    //

    //lặp qua các rules thêm lắng nghe sự kiện
    for (let selector in rules) {
        const inputElements = myForm.querySelectorAll(selector)

        if (inputElements) {
            for (let inputElement of inputElements) {
                
                inputElement.onblur = function() {
                    let msg = validator(this, selector)
                }

                inputElement.onchange = function() {
                    displayMsg(this, '')
                }
                inputElement.onkeypress = function() {
                    displayMsg(this, '')
                }

            }
        }
    }

    //xu ly SUBMIT
    myForm.querySelector('#form-submit').onclick = function(e) {
        e.preventDefault()

        const formData = {}
        let isFormValid = true
        for (let selector in rules) {
            const inputElement = myForm.querySelector(selector)
    
            if (inputElement) {
                
                let msg = validator(inputElement, selector)
                if (msg) {
                    isFormValid = false
                } 
                formData[selector] = getValueInput(inputElement, selector)
                
            }
        }

        if (isFormValid) {
            //fetch()
            // let data = {
            //     type: formSelector,
            //     email: formData['#email'],
            //     name: formData['#name'],
            //     password: formData['#password'],
            //     date: new Date(Number(formData['#year']), Number(formData['#month']) -1, Number(formData['#date']) ),
            //     gender: formData['input[name="gender"]'],
            //     msg: formData['#nomessage'],
            //     share: formData['#share'],
            // }
            console.log(formData)
        }

    }

    
    //method
    function validator(inputElement, selector) {
        let msg
        let ruleArray = rules[selector]
        if (ruleArray) {
            for (let rule of ruleArray) {
                msg = rule(getValueInput(inputElement, selector))
                if (msg) break;
            }
        }
        if (msg) {
            displayMsg(inputElement, msg)
        }
        return msg
    }

    function getValueInput(inputElement, selector) {
        let value = inputElement.value

        switch (inputElement.type) {
            case 'radio':
                value = ''
                inputElements = inputElement.parentElement.querySelectorAll('[type="radio"]')
                if (inputElements) {
                    for (let inputElement of inputElements) {
                        if (inputElement.checked) {
                            value = inputElement.value
                            break
                        }
                    }
                }
                break

            case 'checkbox':
                value = []
                inputElements = inputElement.parentElement.querySelectorAll('[type="checkbox"]')
                if (inputElements) {
                    for (let inputElement of inputElements) {
                        if (inputElement.checked) {
                            value.push(inputElement.value)
                        }
                    }
                }
                break

            default:
        }
        return value
        
    }

    function displayMsg(inputElement, msg) {
        if (msg) {
            inputElement.style.borderColor = 'red'
        } else {
            inputElement.style.borderColor = 'black'
        }
        //
        
        do {
            inputElement = inputElement.parentElement
            if (inputElement.className.split(' ')[0] === 'formgroup') {

                let msgElement = inputElement.querySelector('.formgroup__msg')
                if (msgElement) {
                    msgElement.innerText = msg
                }
                break
            }
        } 
        while (inputElement)

    }

    function getArrayRule(ruleString) {
        let ruleArray = ruleString.split('|')
        let result = []
        for (let rule of ruleArray) {
            if (rule.includes(':')) {
                let _rule = rule.split(':')
                result.push(rulesDefined[_rule[0]](_rule[1]))
            } else {
                result.push(rulesDefined[rule])
            }
        }
        return result
    }

}