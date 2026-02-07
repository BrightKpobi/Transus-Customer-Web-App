'use client'

import { Smartphone, Banknote, ReceiptText } from 'lucide-react'
import QuickActionItem from './QuickActionItem'

export default function QuickActions() {
    return (
        <section className="space-y-4 lg:space-y-6">
            <h2 className="text-lg font-bold uppercase tracking-tighter text-gray-900 dark:text-gray-100">
                Quick Actions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                <QuickActionItem
                    icon={<Smartphone className="text-orange-500" />}
                    title="Add MoMo"
                    sub="Mobile money"
                />
                <QuickActionItem
                    icon={<Banknote className="text-blue-500" />}
                    title="Add Bank"
                    sub="Bank account"
                />
                <QuickActionItem
                    icon={<ReceiptText className="text-purple-500" />}
                    title="E-Receipts"
                    sub="Statements"
                />
            </div>
        </section>
    )
}
