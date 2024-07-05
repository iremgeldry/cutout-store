import React from 'react'
import './ProductDetail.scss'

function ProductDetail() {
    return (
    <>
    <div className="description p-0">
            <div className="description accordion col px-1" id="accordionFilter" >
                <div className="accordion-item">
                    <h1 class="accordion-header" id="licence">
                        <button class="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#collapseLicense" 
                                aria-expanded="false" aria-controls="collapseLicense">
                            Product License
                        </button>
                        <hr />
                    </h1>
                    <div id="collapseLicense" className="accordion-collapse collapse " aria-labelledby="licence" data-bs-parent="#accordionFilter">
                        <div className="accordion-body">
                            <div className="inputItem">
                                <h1>Free Products</h1>
                                <p>
                                    Free products can be used in any type of use - both academic and commercial. When using a set, a pack or part of it, you are required to give full credit to Studio Alternativi (with an active link for online versions) and to the product's creator.
                                    When a product is used in a project that is published on social media, you are required to give full credit to Studio Alternativi (with an active tag to Studio Alternativi’s profile).
                                </p>

                                <h1>Educational (Academic) Use</h1>
                                <p>When using a product tagged with “Educational Use” you are allowed to use it for academic purposes only. Giving credit to Studio Alternativi is much appreciated.</p>
                                            
                                <h1>Commercial Use</h1>
                                <p>Once bought, you are free to use the product without giving attribution.</p>

                                <h1>What is strictly not allowed to do (in all cases)?</h1>
                                <p>Products can’t be sold without being part of a bigger artwork like a drawing, collage, rendering, poster or any other work combining Studio Alternativi’s digital products with other graphic or digital elements.
                                    Also, you are not allowed to use products from Studio Alternativi in similar or any competing services.</p>
                            </div>
                        </div>
                    </div>    
                </div>
            
                <div className="accordion-item">
                    <h1 class="accordion-header" id="download">
                        <button class="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#collapseDownload" 
                                aria-expanded="false" aria-controls="collapseDownload">
                            Download Instructions
                        </button>
                        <hr />
                    </h1>
                    <div id="collapseDownload" className="accordion-collapse collapse " aria-labelledby="download" data-bs-parent="#accordionFilter">
                        <div className="accordion-body">
                            <div className="inputItem">
                                <h1>RAR / ZIP Folders</h1>
                                <p>Please use WINRAR - a free software to open the compressed folder.</p>

                                <h1>AI Vector Files</h1>
                                <p>Please use Adobe Illustrator to open the files</p>
                                            
                                <h1>ABR (Photoshop Brushes)</h1>
                                <p>1. Open Adobe Photoshop <br/>
                                2. Open the Brushes Panel: Window &gt; Brushes<br/>
                                3. Select Import Brushes<br/>
                                4. Locate the .abr file on your hard drive and click open to install<br/>
                                5. The brushes will appear in your Brushes Panel whenever the Brush Tool is selected</p>

                            </div>
                        </div>
                    </div>    
                </div>
            </div>



    </div >
            
    </>
    )
}

export default ProductDetail



