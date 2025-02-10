import React from 'react'

const GridBanner = () => {
  return (
    <div className='bg-grey '>
       <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto px-4 md:px-0 gap-4 py-6'>
            <div className='h-[250px] relative col-span-1 md:col-span-2'>
                <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" className='w-full h-full object-cover rounded-lg shadow-lg'  />
                <div className='absolute inset-0 bg-sky-600 rounded-lg bg-opacity-50 flex flex-col items-center justify-center'>
                    <h1 className='text-white text-4xl font-bols '>Casual Para o Dia Dia</h1>
                    <p className='text-white'>Até <span className='font-bold'>50% OFF</span></p>
                    <button className='mt-2 px-3 py-1 bg-[#fff] text-green-800 rounded-md shadow hover:bg-green-200'>Comprar</button>
                </div>
            </div>
            <div className='h-[250px] relative col-span-1 md:col-span-2'>
                    <img src="https://static.dafiti.com.br/p/Puma-Chuteira-Society-Puma-Future-Z-4.1-NJR-TT-Bdp-Amarelo-3664-5714409-1-zoom.jpg" className='w-full h-full object-cover rounded-lg shadow-md' />
                    <div className='bg-yellow-800 absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center rounded-lg'>
                      <h1 className='text-white text-4xl'>Futebol nos pés</h1>
                      <p className='text-white'>Até <span className='font-bold'>55% OFF</span></p>
                      <button className='text-white bg-yellow-600 px-3 py-2 hover:bg-yellow-400 rounded-md'>Comprar</button>
                    </div>
            </div>
            <div className='relative h-[250px]'>
              <img src="https://images.pexels.com/photos/15668369/pexels-photo-15668369/free-photo-of-sapatos-calcados-chao-fundamento.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover rounded-lg shadow-md' />
              <div className='bg-orange-800 absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center'>
                <h1 className='text-grey text-xl'>Sapatinhos para o seu baby</h1>
              </div>
            </div>
            <div className='relative h-[250px]'>
              <img src="https://images.pexels.com/photos/28720737/pexels-photo-28720737/free-photo-of-sapatos-de-noiva-brancos-elegantes-com-aliancas-de-casamento.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full object-cover rounded-lg shadow-md' />
              <div className='bg-gray-800 absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center'>
                <button className='bg-gray-500 mt-2 px-3 py-1 text-white shadow hover:bg-gray-400 rounded-md'>Comprar</button>
              </div>
            </div>
            <div className='relative h-[250px] col-span-1 md:col-span-2'>
              <img src="http://2.bp.blogspot.com/-Ikasfi1VXE4/UPHssX_G3DI/AAAAAAAATXg/-Wnp3c5s7-Q/s1600/Imagem12_capa.jpg" className='w-full h-full object-cover rounded-lg shadow-md' />
              <div className='bg-pink-800 absolute inset-0 bg-opacity-50 justify-center items-center flex flex-col'>
                <h1 className='text-white text-4xl'>Bloco das Sandálias</h1>
                <button className='bg-pink-600 mt-2 px-3 py-1 text-white shadow hover:bg-pink-400 rounded-md'>Comprar</button>
              </div>
            </div>
       </div>
    </div>
  )
}

export default GridBanner