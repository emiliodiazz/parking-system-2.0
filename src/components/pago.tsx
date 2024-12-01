import { CreditCard } from 'lucide-react'

export default function PaymentInterface() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      {/* Header */}
      <header className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-sm font-bold text-white">S</span>
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-50">System Parking</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
          Ejecutando pago
        </h1>

        {/* Icon Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-full" />
          <div className="relative bg-white dark:bg-gray-900 p-8 rounded-full">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-full">
              <div className="relative">
                <CreditCard className="w-12 h-12 text-white" strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Favor verifique la máquina....
        </p>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Copyright © 2024, System Parking
        </p>
      </footer>
    </div>
  )
}

