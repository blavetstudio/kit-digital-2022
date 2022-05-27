import Head from 'next/head'
import Image from 'next/image'
import settings from 'public/settings.png'
import productivity from 'public/productivity.png'
import logos from 'public/logo-kit-digital-2048x238.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kit digital Blavet Studio</title>
        <meta name="description" content="Web explicativa del Kit Digital por Blavet Studio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <main>
        {/* Intro */}
        <section className="w-full px-1 pb-12 antialiased bg-white">
            <div className="">

                <nav className="relative z-50 select-none">
                    <div className="container relative flex flex-col items-center justify-between md:h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:flex-row md:overflow-visible lg:justify-between sm:px-4 md:px-2">
                        <div className="flex items-center justify-start md:w-1/4 h-full">
                            <a href="#_" className="inline-block py-4 md:py-0">
                                <span className="p-1 text-xl font-black leading-none text-gray-900"><span>Blavet Studio</span></span>
                            </a>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full md:space-x-6 lg:space-x-8 md:w-2/3  md:items-end md:flex-row md:justify-end">
                            <a href="#" className="inline-block w-full py-2 mx-0 font-medium text-center hover:text-yellow-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3">Inicio</a>
                            <a href="#que-es" className="inline-block w-full py-2 mx-0 font-medium text-center text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-yellow-600 lg:mx-3">¿Qué es?</a>
                            <a href="#para-quien" className="inline-block w-full py-2 mx-0 font-medium text-center text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-yellow-600 lg:mx-3">¿Para quien?</a>
                            <a href="#soluciones" className="inline-block w-full py-2 mx-0 font-medium text-center text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-yellow-600 lg:mx-3">Soluciones</a>
                        </div>
                    </div>
                </nav>


                <div className="container max-w-lg px-4 py-14 mx-auto text-left md:max-w-none md:text-center">
                    <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span className="inline md:block">Kit Digital</span></h1>
                    <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">El Ministerio de Asuntos Económicos y Transformación Digital ha lanzado el programa Kit Digital para Pymes y Autónomos que pertenezcan a cualquier sector o tipología de negocio.</div>
                    <div className="flex flex-col items-center mt-12 text-center">
                        <span className="relative inline-flex w-full md:w-auto">
                            <a href="#soluciones" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-gray-800 border border-transparent rounded-full md:w-auto hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                                Saber más
                            </a>
                        </span>
                    </div>

                    <figure className="container mx-auto mt-5 text-gray-500 md:mt-12 md:text-center lg:text-lg">
                      <Image alt="Logos de kit digital" src={logos}></Image>
                    </figure>
                </div>

            </div>
        </section>

        {/* Qué es */}
        <section id="que-es" className="w-full bg-white py-7 md:py-12">
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

                <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                    <figure className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20">
                      <Image alt="" src={productivity}></Image>
                    </figure>
                </div>

                <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                    <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        ¿En qué consiste el Kit digital?
                    </h2>
                    <p className="pt-4 pb-4 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                        Es una ayuda económica en forma de &quot;bono digital&quot; que tiene como objetivo final facilitarte el proceso de digitalización de tu negocio.
                        <br /><br />
                        Puedes recibir las ayudas si tu empresa o autónomo responde al siguiente perfil:
                    </p>
                    <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>de 0 a 2 empleados
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>de 3 a 9 empleados
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>de 10 hasta 50 empleados.
                        </li>
                    </ul>
                </div>

            </div>
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">


                <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                    <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">


                      El programa Kit digital pymes se enmarca dentro del Plan de Recuperación, Transformación y Resiliencia, la agenda España Digital 2025 y el Plan de Digitalización de Pymes 2021-2025. Está financiado por la Unión Europea, y uno de sus ejes vertebradores es el Bono digital.<br /><br />

                      Estas subvenciones pretenden beneficiar a Pymes y autónomos, ayudándoles a hacer frente a las necesidades de digitalización de sus negocios, con garantías y bajo el acompañamiento de profesionales acreditados.

                    </p>
                </div>

                <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                    <figure className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32">
                      <Image alt="" src={settings}></Image>
                    </figure>
                </div>
            </div>
        </section>

        <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
          <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row md:items-start max-w-7xl lg:px-16">

            <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
              <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">Las empresas podrán recibir hasta un máximo de 12.000 en ayudas que tendrán que utilizar en la digitalización de sus negocios, eligiendo las soluciones del Kit Digital que mejor se ajusten a las necesidades de cada negocio.</p>
            </div>

            <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
              <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">El acceso a estas ayudas se realizará necesariamente mediante la ayuda de un agente digitalizador que podrán encontrar en la página Acelera Pyme. La empresa digitalizadora tendrá la labor de implementar las soluciones digitales contempladas en el kit digital y actuará como acompañamiento de la empresa durante todo el proceso de solicitud de la subvención.</p>
            </div>


          </div>
        </section>

        {/* Para quien */}
        <section id="para-quien" className="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
            <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
                    <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                        ¿Quién puede recibir estas ayudas?
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">

                    <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                        <h3 className="m-0 text-xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-2xl md:text-4xl">
                            Tramo 1
                        </h3>
                        <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                            <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                                2.000€
                            </p>
                        </div>
                        <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                            hasta 2 empleados
                        </p>

                        <a href="#contacto" className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-gray-800 border rounded-full cursor-pointer hover:bg-gray-900 hover:text-white focus-within:bg-gray-900 focus-within:border-gray-900 focus-within:text-white sm:text-base md:text-lg">
                            Este es el mío
                        </a>
                    </div>

                    <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border border-solid rounded-lg sm:p-6 md:my-8 md:p-8">
                        <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                            Tramo 2
                        </h3>
                        <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                            <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                                6.000€
                            </p>
                        </div>
                        <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                            de 3 a 9 empleados
                        </p>

                        <a href="#contacto" className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-gray-800 border rounded-full cursor-pointer hover:bg-gray-900 hover:text-white focus-within:bg-gray-900 focus-within:border-gray-900 focus-within:text-white sm:text-base md:text-lg">
                            Lo quiero
                        </a>
                    </div>

                    <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                        <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                            Tramo 3
                        </h3>
                        <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                            <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                                12.000€
                            </p>
                        </div>
                        <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200">
                            de 10 hasta 50 empleados
                        </p>
                        <a href="#contacto" className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-gray-800 border rounded-full cursor-pointer hover:bg-gray-900 hover:text-white focus-within:bg-gray-900 focus-within:border-gray-900 focus-within:text-white sm:text-base md:text-lg">
                            Cuéntame más
                        </a>
                    </div>
                </div>

            </div>
        </section>

        {/* Requisitos */}
        <section id="requisitos" className="py-14 bg-white">
            <div className="px-8 mx-auto max-w-7xl lg:px-16">
                <h2 className="mb-4 text-xl font-bold md:text-3xl">¿Qué hacer para conseguir el bono digital?</h2>
                <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
                    <div>
                        <h5 className="mt-10 mb-3 font-semibold text-gray-900">1. Ser una pequeña empresa, microempresa o autónomo.</h5>
                        <h5 className="mt-10 mb-3 font-semibold text-gray-900">2. Cumplir los límites financieros y efectivos que definen las categorías de empresas.</h5>
                        <h5 className="mt-10 mb-3 font-semibold text-gray-900">3. Estar en situación de alta y tener la antigüedad mínima que se establece por convocatoria.</h5>
                        <h5 className="mt-10 mb-3 font-semibold text-gray-900">4. No tener consideración de empresa en crisis.</h5>
                    </div>
                    <div>
                        <h5 className="mt-10 mb-3 font-semibold text-gray-900">5. Estar al corriente de las obligaciones tributarias y frente a la Seguridad Social.</h5>
                        <h5 className="mt-10 mb-3 font-semibold text-gray-900">6. No estar sujeta a una orden de recuperación pendiente de la Comisión Europea que haya declarado una ayuda ilegal e incompatible con el mercado común.</h5>
                        <h5 className="mt-10 mb-3 font-semibold text-gray-900">7. No incurrir en ninguna de las prohibiciones previstas en el artículo 13.2 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones.</h5>
                        <h5 className="mt-10 mb-3 font-semibold text-gray-900">8. No superar el límite de ayudas mínimas (de pequeña cuantía)</h5>
                    </div>
                </div>
            </div>
        </section>

        {/* Pasos a seguir */}
        <section id="pasos" className="relative py-16 bg-white min-w-screen animation-fade animation-delay">
            <div className="container px-0 px-8 mx-auto sm:px-12 xl:px-5">
                <h2 className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
                    ¿Cómo conseguir el bono digital?
                </h2>
                <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 className="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl">1. Registro</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        Regístrate en <a href="http://www.acelerapyme.es/" className='text-yellow-600 hover:text-yellow-500' target="_blank" rel="nofollow noopener noreferrer">www.acelerapyme.es</a> y completa el test de autodiagnóstico.
                    </p>
                </div>

                <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 className="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl">2. Escoge tus soluciones digitales</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        En función de las necesidades de tu negocio tendrás que escoger las soluciones que más te interesa implementar.
                    </p>
                </div>
                <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 className="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl">3. Solicita tu bono</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        Realiza la solicitud de tu bono digital en la <a href="http://sede.red.gob.es/" target="_blank" className='text-yellow-600 hover:text-yellow-500' rel="nofollow noopener noreferrer">sede electrónica de Red.es</a>.
                    </p>
                </div>
                <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 className="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl">4. Escoge a tu proveedor</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        Encuentra a Blavet Studio en la lista de proveedores y ponte en contacto con nosotros para ser tu agente digitalizador y ayudarte en todo el proceso.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center mt-12 text-center">
              <span className="relative inline-flex w-full md:w-auto">
                <a href="https://www.acelerapyme.es/kit-digital" target="_blank" rel="nofollow noopener noreferrer" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-gray-800 border border-transparent rounded-full md:w-auto hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">Bases y convocatoria oficial</a>
              </span>
            </div>
        </section>



        {/* Soluciones */}
        <section id="soluciones" className="w-full bg-white py-7 md:py-12">
            <h3 className="mt-1 mb-12 text-2xl font-bold text-left text-gray-800 sm:mx-0 sm:text-3xl sm:text-center md:text-4xl lg:text-5xl">
                Soluciones
            </h3>
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
                <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                    <figure className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20">
                      <Image alt="" src={productivity}></Image>
                    </figure>
                </div>

                <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                    <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        ¿Qué incluye el Kit Digital?
                    </h2>
                    <p className="pt-4 pb-4 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                        Las ayudas contemplan uno a varios de los siguientes servicios: Sitio Web y Presencia en Internet, Comercio electrónico, Gestión de redes sociales, Gestión de clientes, Business Intelligence y Analítica, Servicios y herramientas de Oficina Virtual, Gestión de procesos, Factura electrónica, Comunicaciones seguras y Ciberseguridad.
                        <br /><br />
                        Concretamente desde Blavet Studio podemos ayudarte en:<br/> <a href="#solucion-web" className='text-yellow-600 hover:text-yellow-500' rel="nofollow noopener noreferrer">Sitio Web y Presencia en Internet</a> <br/> <a href="#solucion-ecommerce" className='text-yellow-600 hover:text-yellow-500' rel="nofollow noopener noreferrer">Comercio electrónico</a>
                    </p>
                </div>

            </div>

            <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">

                <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        ¿Qué es un Agente digitalizador?
                    </h2>
                    <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                        El Agente digitalizador es una empresa acreditada por la Administración, para ofrecer a tu negocio (pymes, microempresas y autónomos) los servicios incluidos en el Kit Digital.
                    </p>
                </div>

                <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                    <figure className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32">
                      <Image alt="" src={settings}></Image>
                    </figure>
                </div>
            </div>
        </section>


        <section id="solucion-web" className="w-full bg-white py-7 md:py-12">
            <div className="container px-0 px-8 mb-8 mx-auto sm:px-12 md:mb-20 xl:px-5">
                <p className="text-xs font-bold text-left text-yellow-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
                    Crea o mejora tu página web
                </p>
                <h3 className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
                    Sitio web y presencia en internet
                </h3>

            </div>
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                  <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        Nuestros servicios
                  </h2>
                    <ul className="p-0 m-0 pt-4 leading-6 border-0 border-gray-300">

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Consultoría digital</li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Definición del estilo visual
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Diseño web responsive a medida
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Desarrollo web a medida en WordPress (CMS autogestionable)
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Desarrollo web compatible para implementación de posicionamiento SEO
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Instalación de plugins básicos necesarios (SEO, Analytics,...)
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Configuración del servidor (CRON, bases de datos...)
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Instalación y configuración de Search Console, Analytics, Tag Manager.
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Dominio y hosting para web corporativa incluido el primer año.
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Accesible a nivel AA de las Pautas WCAG-2.1
                    </li>
                  </ul>

                  <h2 className="mt-5 mb-2 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-xl md:text-xl">
                        No incluye
                    </h2>
                  <ul>
                      <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-300 rounded-full"><span className="text-sm font-bold">x</span></span>Branding</li>

                      <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-300 rounded-full"><span className="text-sm font-bold">x</span></span>Dirección de arte</li>

                      <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-300 rounded-full"><span className="text-sm font-bold">x</span></span>Sesiones de fotografía y/o vídeo</li>

                      <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-300 rounded-full"><span className="text-sm font-bold">x</span></span>Elaboración de textos</li>

                      <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-300 rounded-full"><span className="text-sm font-bold">x</span></span>Implementación multi-idioma</li>
                  </ul>

                </div>

                <div className="box-border relative w-full max-w-md px-8 mt-10 mb-4 bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                    <figure className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32">
                      <Image alt="" src={settings}></Image>
                    </figure>

                    <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                      <h3 className="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl">Importes</h3>
                      <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                          Precio: desde 5000€<br />
                          <span className='font-bold'>Subvención: hasta 2000€</span>
                      </p>
                    </div>

                  <div className="py-6 mx-auto mt-10 text-center max-w-xs">
                  <a href="mailto:hello@blavetstudio.com?subject=Kit%20Digital%20Pagina%20Web" target="_blank" rel="nofollow noopener noreferrer" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-gray-800 border border-transparent rounded-full  hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">Me interesa</a>
                  </div>

                </div>
            </div>
        </section>

        <section id="solucion-ecommerce" className="w-full bg-white py-7 md:py-12">
            <div className="container px-0 px-8 mb-8 mx-auto sm:px-12 md:mb-20 xl:px-5">
                <p className="text-xs font-bold text-left text-yellow-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
                    Crea o mejora tu tienda online
                </p>
                <h3 className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
                    Comercio Electrónico
                </h3>

            </div>
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                  <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        Nuestros servicios
                  </h2>
                  <ul className="p-0 m-0 pt-4 leading-6 border-0 border-gray-300">


                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Consultoría digital</li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Definición del estilo visual
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Diseño web responsive a medida
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Desarrollo e-commerce a medida WooCommerce (CMS autogestionable)
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Alta/importación de un máximo de 100 productos.
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Integración de los métodos de pago básicos (Redsys, Paypal, Stripe, Transferencia bancaria)
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Implementación de las reglas de envío según destino para productos físicos
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Desarrollo web compatible para implementación de posicionamiento SEO
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Instalación de plugins básicos necesarios (SEO, Analytics,...)
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Configuración del servidor (CRON, bases de datos...)
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Instalación y configuración de Search Console, Analytics, Tag Manager.
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Dominio y hosting para ecommerce incluido el primer año.
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Asesoramiento digital y manual de uso digital.
                    </li>

                    <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span>Accesible a nivel AA de las Pautas WCAG-2.1
                    </li>

                  </ul>

                  <h2 className="mt-5 mb-2 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-xl md:text-xl">
                        No incluye
                    </h2>
                  <ul>
                      <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-300 rounded-full"><span className="text-sm font-bold">x</span></span>Branding</li>

                      <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-300 rounded-full"><span className="text-sm font-bold">x</span></span>Dirección de arte</li>

                      <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-300 rounded-full"><span className="text-sm font-bold relative">x</span></span>Sesiones de fotografía y/o vídeo</li>

                      <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-300 rounded-full"><span className="text-sm font-bold">x</span></span>Elaboración de textos</li>

                      <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-red-300 rounded-full"><span className="text-sm font-bold">x</span></span>Implementación multi-idioma</li>
                  </ul>

                </div>

                <div className="box-border relative w-full max-w-md px-8 mt-10 mb-4 bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                  <figure className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32">
                    <Image alt="" src={settings}></Image>
                  </figure>

                  <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 className="text-lg font-bold text-yellow-500 sm:text-xl md:text-2xl">Importes</h3>
                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        Precio: desde 8000€<br />
                        <span className='font-bold'>Subvención: hasta 2000€</span>
                    </p>
                  </div>

                  <div className="py-6 mx-auto mt-10 text-center max-w-xs">
                  <a href="mailto:hello@blavetstudio.com?subject=Kit%20Digital%20Comercio%20Electronico" target="_blank" rel="nofollow noopener noreferrer" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-gray-800 border border-transparent rounded-full  hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">Me interesa</a>
                  </div>

                </div>
            </div>
        </section>



        <section id="contacto" className="px-2 py-32 bg-white md:px-0">
            <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
                    <span className="block">Ha llegado el momento de<br /><span className="block mt-1 text-yellow-500 lg:inline lg:mt-0">profesionalizar tu presencia en internet</span></span>
                </h1>
                <p className="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
                    ¿Hacemos equipo?
                </p>
                <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">

                    <a href="mailto:hello@blavetstudio.com" target="_blank" rel="nofollow noopener noreferrer" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-gray-800 border border-transparent rounded-full  hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 md:w-auto">Contacta con nosotros <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg></a>
                </div>
            </div>
        </section>

      </main>

    </>
  )
}
