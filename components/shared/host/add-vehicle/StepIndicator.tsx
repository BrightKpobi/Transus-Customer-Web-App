'use client'

import { Check } from 'lucide-react'

interface StepIndicatorProps {
    steps: string[]
    currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
    return (
        <div className="flex items-center justify-between">
            {steps.map((step, index) => {
                const stepNumber = index + 1
                const isCompleted = stepNumber < currentStep
                const isCurrent = stepNumber === currentStep
                const isUpcoming = stepNumber > currentStep

                return (
                    <div key={step} className="flex items-center flex-1">
                        {/* Step Circle & Label */}
                        <div className="flex flex-col items-center">
                            <div
                                className={`
                                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                                    transition-all duration-300
                                    ${isCompleted 
                                        ? 'bg-amber-400 text-white' 
                                        : isCurrent 
                                            ? 'bg-amber-400 text-white' 
                                            : 'bg-gray-200 text-gray-500'
                                    }
                                `}
                            >
                                {isCompleted ? (
                                    <Check size={16} strokeWidth={3} />
                                ) : (
                                    stepNumber
                                )}
                            </div>
                            <span
                                className={`
                                    mt-2 text-xs font-medium
                                    ${isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-400'}
                                `}
                            >
                                {step}
                            </span>
                        </div>

                        {/* Connector Line */}
                        {index < steps.length - 1 && (
                            <div
                                className={`
                                    flex-1 h-0.5 mx-2 mt-[-20px]
                                    ${isCompleted ? 'bg-amber-400' : 'bg-gray-200'}
                                `}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}
