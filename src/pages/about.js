import Image from "next/image";
import React from "react";

function About(){
    return(
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <Image src="/images/about-page.png" width={350} height={350} alt="aboutpage" class="img-fluid"/>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <h1>About Company</h1>
                        <p>Transparent and talented, our strong process keeps our team focused and yours involved. We love the work we do, the clients we work with and the amazing people we work alongside! 
                            We closely partner with our clients to become a trusted advisor and extension of their business, driving amazing digital results. Our mission is to create stunning websites with exceptional UI/UX and brilliant App Devlopment, MLM Marketing strategies focused on the B2B industry. 
                            Our company provides an ideal online platform to your business. With which you can spread your business very fast. And as soon as you look at your business, you reach a larger scale.
                        </p>
                    </div>
                </div>
            </div>









        </>
    )
}
export default About
