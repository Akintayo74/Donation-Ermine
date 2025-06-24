import React from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
// import FormStepReview from './FormStepReview';


function MultistepForm() {
    const [step, setStep] = React.useState(1);
    const [formData, setFormData] = React.useState({
        orgEmail: '',
        orgName: '',
        password: '',
        id: '',
        orgNumber: '',
        acctName: '',
        acctNumber: '',
        bankName: '',
        orgAddress: '',
    })

    const updateFormData = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    return (
        <>
            {step === 1 && <FormStep1 formData={formData} onChange={updateFormData} onNext={() => setStep(2)} />}
            {step === 2 && <FormStep2 formData={formData} onChange={updateFormData} onNext={() => setStep(3)} />}
            {step === 3 && <FormStep3 formData={formData} onChange={updateFormData} onNext={() => setStep(4)} />}
            {/* {step === 4 && <FormStepReview formData={formData} onSubmit={handleSubmit} />} */}
        </>
    )
}

export default MultistepForm;