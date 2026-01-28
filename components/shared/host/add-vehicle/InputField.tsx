'use client'

interface InputFieldProps {
    label: string
    placeholder: string
    value: string
    onChange: (value: string) => void
    type?: 'text' | 'number'
    maxLength?: number
}

export function InputField({
    label,
    placeholder,
    value,
    onChange,
    type = 'text',
    maxLength,
}: InputFieldProps) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-900">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                maxLength={maxLength}
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-gray-900 placeholder:text-gray-400 focus:border-amber-400 transition"
            />
        </div>
    )
}
