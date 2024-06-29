import React from 'react';
import Head from 'next/head';

const ampHtml = `
<!doctype html>
<html ⚡>
<head>
    <meta charset="utf-8">
    <title>Agricultural Innovation</title>
    <link rel="canonical" href="https://example.com/contact-us">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta name="google-adsense-account" content="ca-pub-2984235707700468">
    <meta name="amp-script-src" content="sha384-Lkci8pajsXBeI8uci0wXUWBobvQMKKJVO9rUQDTjrXXsmM6Etd5bB82nn-aYVESJ">
    <style amp-custom>
        body {
            font-family: Arial, sans-serif;
            background-color: black;
            color: white;
        }

        h1,
        h2,
        p {
            margin: 0;
            padding: 0;
            color: white;
        }

        .section {
            padding: 20px;
            color: white;
        }

        .title {
            font-size: 24px;
            font-weight: bold;
        }

        .subtitle {
            font-size: 20px;
            font-weight: normal;
        }

        .content {
            font-size: 16px;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: black;
            color: white;
            text-decoration: none;
        }

        .image-container {
            text-align: center;
            margin: 20px 0;
        }

        .image-container amp-img {
            max-width: 100%;
            height: auto;
        }
    </style>
    <style amp-boilerplate>
        body {
            -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        }

        @-webkit-keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @-moz-keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @-ms-keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @-o-keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }
    </style>
    <noscript>
        <style amp-boilerplate>
            body {
                -webkit-animation: none;
                -moz-animation: none;
                -ms-animation: none;
                animation: none;
            }
        </style>
    </noscript>
    <script async src="https://cdn.ampproject.org/v0.js"></script>

    <script async custom-element="amp-selector" src="https://cdn.ampproject.org/v0/amp-selector-0.1.js"></script>
    <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
    <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>



</head>

<body>

    <section class="relative">
        <div class="p-4 md:p-10 flex flex-col md:flex-row justify-between">
            <div class="w-full md:w-1/3 px-2 md:px-5 py-10">
                <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold font-raleway">
                    Agricultural Innovation
                </h1>
                <p class="mt-4 text-lg md:text-xl font-montserrat text-[var(--neon-green)] drop-shadow-md">
                    Pioneering AgriTech for profitable, eco-friendly farming. Explore tailored, budget-friendly
                    solutions for sustainable growth.
                </p>
                <div class="flex justify-start mt-8">
                    <a on="/contact-us"
                        class="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl">
                        <span
                            class="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Let&apos;s talk
                        </span>
                    </a>
                </div>
            </div>

        </div>
    </section>



    <section
        class="flex md:flex-row flex-col-reverse justify-center md:justify-between items-center p-5 md:p-20 gap-10 bg-white">
        <div class="flex flex-col w-full">
            <h2 class="text-black text-3xl md:text-4xl font-merriweather font-black">
                Transforming Agriculture through Technology
            </h2>
            <p class="text-black mt-10 font-montserrat text-base md:text-lg">
                As the agriculture sector embraces digital solutions, traditional farming practices are evolving into
                data-driven, precision agriculture methodologies. This paradigm shift is enhancing efficiency,
                productivity,
                and sustainability across the entire agricultural value chain. Furthermore, the integration of
                technologies
                such as IoT, AI, and blockchain is fostering transparency, traceability, and resilience in agricultural
                operations. VSC is at the forefront of this Agritech revolution, working closely with farmers,
                agribusinesses, and stakeholders to unlock the full potential of technology in agriculture, ensuring
                food
                security, environmental stewardship, and economic prosperity.
            </p>
        </div>
        <div class="flex justify-start w-full">
            <amp-img width="750" height="500" src="/SliderImage1.webp" alt="Agritech" layout="responsive"
                class="w-full object-cover h-[40vh] md:h-full"></amp-img>
        </div>
    </section>

    <section>
        <div class="flex flex-row">
            <amp-ad width="100vw" height="320" type="adsense" data-ad-client="ca-pub-2984235707700468"
                data-ad-slot="7448696590" data-auto-format="rspv" data-full-width="">
                <div overflow=""></div>
            </amp-ad>
            <amp-ad width="100vw" height="320" type="adsense" data-ad-client="ca-pub-2984235707700468"
                data-ad-slot="5097865421" data-auto-format="rspv" data-full-width="">
                <div overflow=""></div>
            </amp-ad>
            <amp-ad width="100vw" height="320" type="adsense" data-ad-client="ca-pub-2984235707700468"
                data-ad-slot="7267350308" data-auto-format="rspv" data-full-width="">
                <div overflow=""></div>
            </amp-ad>
        </div>
    </section>

    <section class="bg-white">
        <h1 class="text-3xl text-black mb-5 ml-10 font-merriweather">Leverage our AI expertise to unlock the future of
            farming together.</h1>
        <h1 class="text-xl text-black ml-10 font-merriweather">YOUR CHALLENGE</h1>
        <nav class="bg-white text-black font-merriweather text-xl ml-5">
            <ul class="flex flex-col md:flex-row justify-around p-4 md:p-8">
                <li role="tab" class="nav-link mx-5 hover:border-b-4 border-transparent" tabindex="0"
                    on="tap:AMP.setState({selectedSection: 'set1'})"
                    [class]="selectedSection == 'set1' ? 'border-b-4 border-blue-500' : ''">
                    <a>Enhancing Farm Productivity</a>
                </li>
                <li role="tab" class="nav-link mx-5 hover:border-b-4 border-transparent" tabindex="0"
                    on="tap:AMP.setState({selectedSection: 'set2'})"
                    [class]="selectedSection == 'set2' ? 'border-b-4 border-blue-500' : ''">
                    <a>Ensuring Food Safety and Quality</a>
                </li>
                <li role="tab" class="nav-link mx-5 hover:border-b-4 border-transparent" tabindex="0"
                    on="tap:AMP.setState({selectedSection: 'set3'})"
                    [class]="selectedSection == 'set3' ? 'border-b-4 border-blue-500' : ''">
                    <a>Facilitating Market Access and Traceability</a>
                </li>
            </ul>
        </nav>

        <h1 class="text-xl text-black ml-10 font-merriweather">OUR SOLUTIONS</h1>

        <!-- Content for 'Enhancing Farm Productivity' -->
        <section id="set1" class="section-content p-8 text-black text-3xl ml-10" [hidden]="selectedSection != 'set1'">
            <div class="mb-8">
                <h2 class="font-merriweather text-black">Precision Farming Solutions</h2>
                <p class="font-montserrat text-base md:text-lg my-5 text-black">
                    Deploying IoT sensors, drones, and AI algorithms to optimize crop management practices, maximize
                    yields, and minimize resource usage.
                </p>
                <div class="flex justify-start my-8">
                    <a href="/contact-us?amp=1"
                        class="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl">
                        <span
                            class="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Let's talk
                        </span>
                    </a>
                </div>
            </div>

            <div class="mb-8">
                <h2 class="font-merriweather text-black">Smart Irrigation Systems</h2>
                <p class="font-montserrat text-base md:text-lg my-5 text-black">
                    Utilizing sensor-based irrigation systems and data analytics to deliver water precisely where and
                    when needed, conserving water resources and improving crop health.
                </p>
                <div class="flex justify-start my-8">
                    <a href="/contact-us?amp=1"
                        class="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl">
                        <span
                            class="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Let's talk
                        </span>
                    </a>
                </div>
            </div>
        </section>

        <!-- Content for 'Ensuring Food Safety and Quality' -->
        <section id="set2" class="section-content p-8 text-black text-3xl ml-10" [hidden]="selectedSection != 'set2'">
            <div class="mb-8">
                <h2 class="font-merriweather text-black">Food Safety Monitoring</h2>
                <p class="font-montserrat text-base md:text-lg my-5 text-black">
                    Implementing real-time monitoring systems to detect contaminants, pathogens, and spoilage in the
                    food supply chain, ensuring consumer safety and compliance with regulatory standards.
                </p>
                <div class="flex justify-start my-8">
                    <a href="/contact-us?amp=1"
                        class="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl">
                        <span
                            class="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Let's talk
                        </span>
                    </a>
                </div>
            </div>

            <div class="mb-8">
                <h2 class="font-merriweather text-black">Quality Assurance Technologies</h2>
                <p class="font-montserrat text-base md:text-lg my-5 text-black">
                    Implementing blockchain-based traceability systems and AI-powered quality control solutions to
                    ensure the safety, authenticity, and integrity of agricultural products.
                </p>
                <div class="flex justify-start my-8">
                    <a href="/contact-us?amp=1"
                        class="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl">
                        <span
                            class="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Let's talk
                        </span>
                    </a>
                </div>
            </div>
        </section>

        <!-- Placeholder section for 'Facilitating Market Access and Traceability' -->
        <section id="set3" class="section-content p-8 text-black text-3xl ml-10" [hidden]="selectedSection != 'set3'">
            <div class="mb-8">
                <h2 class="font-merriweather text-black">Market Access Platforms</h2>
                <p class="font-montserrat text-base md:text-lg my-5 text-black">
                    Developing online marketplaces and e-commerce platforms to connect farmers directly with consumers,
                    enabling fair trade and transparent transactions.
                </p>
                <div class="flex justify-start my-8">
                    <a href="/contact-us?amp=1"
                        class="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl">
                        <span
                            class="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Let's talk
                        </span>
                    </a>
                </div>
            </div>

            <div class="mb-8">
                <h2 class="font-merriweather text-black">Supply Chain Traceability Solutions</h2>
                <p class="font-montserrat text-base md:text-lg my-5 text-black">
                    Implementing blockchain-based supply chain solutions to track the journey of agricultural products
                    from farm to fork, ensuring transparency, accountability, and sustainability.
                </p>
                <div class="flex justify-start my-8">
                    <a href="/contact-us?amp=1"
                        class="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl">
                        <span
                            class="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Let's talk
                        </span>
                    </a>
                </div>
            </div>
        </section>
    </section>


    <section class="home-core-capability">
    <div class="h-full">
      <div class="p-12 pb-1 flex justify-between items-center my-8">
        <h1 class="text-2xl md:text-4xl font-raleway font-semibold bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">
          Services
        </h1>
      </div>
      
     <div class="p-12 pt-1  flex-col justify-center items-center gap-8">
        <div class="content relative group">
          <amp-img width="1000" height="1500" src="/web-mobile-ui-ux.webp" alt="Design & Development" layout="responsive" class="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-100"></amp-img>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white text-black bg-opacity-70 group-hover:opacity-0">
            <h2 class="text-2xl font-merriweather font-extrabold text-center mt-4 shadow-sm">Design & Development</h2>
          </div>
          <div class="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <p class="text-2xl text-black uppercase font-bold bg-white shadow-sm px-5 bg-opacity-50 font-ubuntu transform -rotate-90 absolute left-0">web</p>
            <p class="text-2xl text-black uppercase font-bold bg-white px-5 bg-opacity-50 font-ubuntu absolute top-5">mobile</p>
            <p class="text-2xl text-black uppercase font-bold bg-white px-5 bg-opacity-50 font-ubuntu transform rotate-90 absolute right-0">ui/ux</p>
          </div>
        </div>

        <div class="content relative group">
          <amp-img width="1000" height="1500" src="/metaverse.webp" alt="Virtual Reality: Metaverse, Web 3.0 & Blockchain." layout="responsive" class="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-100"></amp-img>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white text-black bg-opacity-70 group-hover:opacity-0">
            <h2 class="text-2xl font-merriweather font-extrabold text-center mt-4 shadow-sm">Virtual Reality</h2>
          </div>
          <div class="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <p class="text-2xl text-black uppercase font-bold bg-white shadow-sm px-5 bg-opacity-50 font-ubuntu transform -rotate-90 absolute left-0">ar/vr</p>
            <p class="text-2xl text-black uppercase font-bold bg-white px-5 bg-opacity-50 font-ubuntu absolute top-5">Metaverse</p>
            <p class="text-2xl text-black uppercase font-bold bg-white px-5 bg-opacity-50 font-ubuntu transform rotate-90 absolute right-0">web 3.0</p>
          </div>
        </div>

        <div class="content relative group">
          <amp-img width="1000" height="1500" src="/cloud.webp" alt="Cloud Solutions: AWS, Azure & GCP." layout="responsive" class="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-100"></amp-img>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white text-black bg-opacity-70 group-hover:opacity-0">
            <h2 class="text-2xl font-merriweather font-extrabold text-center mt-4 shadow-sm">Cloud Solutions</h2>
          </div>
          <div class="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <p class="text-2xl text-black uppercase font-bold bg-white shadow-sm px-5 bg-opacity-50 font-ubuntu transform -rotate-90 absolute left-0">aws</p>
            <p class="text-2xl text-black uppercase font-bold bg-white px-5 bg-opacity-50 font-ubuntu absolute top-5">Azure</p>
            <p class="text-2xl text-black uppercase font-bold bg-white px-5 bg-opacity-50 font-ubuntu transform rotate-90 absolute right-0">gcp</p>
          </div>
        </div>

        <div class="content relative group">
          <amp-img width="1000" height="1500" src="/seo-smo.webp" alt="Digital Marketing: SEO, SEM, SMO & SMM" layout="responsive" class="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-100"></amp-img>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white text-black bg-opacity-70 group-hover:opacity-0">
            <h2 class="text-2xl font-merriweather font-extrabold text-center mt-4 shadow-sm">Digital Marketing</h2>
          </div>
          <div class="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <p class="text-2xl text-black uppercase font-bold bg-white shadow-sm px-5 bg-opacity-50 font-ubuntu transform -rotate-90 absolute left-0">seo</p>
            <p class="text-2xl text-black uppercase font-bold bg-white px-5 bg-opacity-50 font-ubuntu absolute top-5">sem</p>
            <p class="text-2xl text-black uppercase font-bold bg-white px-5 bg-opacity-50 font-ubuntu transform rotate-90 absolute right-0">smo</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-8">
                    <a href="/contact-us?amp=1"
                        class="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl">
                        <span
                            class="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            View More Services
                        </span>
                    </a>
                </div>
    </div>
  </section>

    <section class="section">
        <div>
            <h1 class="text-white text-xl md:text-2xl font-merriweather font-semibold ml-5">Technologies</h1>
            <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Start of Technology List -->
                <div class="flex items-center justify-center">Web Apps</div>
                <div class="flex items-center justify-center">Mobile Apps</div>
                <div class="flex items-center justify-center">Native Apps</div>
                <div class="flex items-center justify-center">Smart TV Apps</div>
                <div class="flex items-center justify-center">Progressive Web Apps (PWA)</div>
                <div class="flex items-center justify-center">Serverless Applications</div>
                <div class="flex items-center justify-center">Single Page Applications (SPA)</div>
                <div class="flex items-center justify-center">Microservices</div>
                <div class="flex items-center justify-center">Cloud Native Applications</div>
                <!-- End of Technology List -->
            </div>
        </div>
    </section>
</body>

</html>
`;

const ContactUs = () => {
    return (
        <div>
            <Head>
                <script async src="https://cdn.ampproject.org/v0.js"></script>
                <script async src="https://cdn.tailwindcss.com"></script>

            </Head>
            <div dangerouslySetInnerHTML={{ __html: ampHtml }} />
        </div>
    );
};

export default ContactUs;
