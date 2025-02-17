import { Clock, Lock, RotateCcw, Truck } from 'lucide-react'
import React from 'react'

const features = [
    {id: 1,icon: Truck, text: 'Freye Grátis', subtext: 'Em pedidos acima de R$200'},
    {id: 2, icon: Lock, text: 'Pagamento Seguro', subtext: '100% Protegidos'},
    {id: 3, icon: RotateCcw, text: 'Devolução Fáceis', subtext: 'Politica de Devolução de 30 dias'},
    {id: 4, icon: Clock, text: 'Suporte 24 horas', subtext: 'Atendimneto ao Cliente delicado'},
]

const Features = () => {
  return (
    <div className='py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4'>
          {
            features.map((feature) => {
              return <div key={feature.id} className='flex items-center justify-center text-center sm:text-left'>
                 <feature.icon className='flex-shrink-0 h-10 w-10 text-dark' aria-hidden="true" />
                  <div className='ml-4'>
                      <p className='text-base font-medium text-gray-900'>{feature.text}</p>
                      <p className='mt-1 text-sm text-gray-500'>{feature.subtext}</p>
                  </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Features