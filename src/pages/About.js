import React from 'react'
import teswira from '../assets/images/about.png'
export default function About() {
  return (
    <div style={{marginBottom:180}}>
       <section class="breadcrumb breadcrumb_bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb_iner text-center">
            <div class="breadcrumb_iner_item">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className='container mt-5'>
    <div className='row'>
    <div class="about-content">
				<div class="d-flex animate-box align-items-center gap-5">
					<div class="col-md-5 ">
						<div class="desc">
							<h3>Company History</h3>
							<p>Servicy est une plateforme multiservice en Tunisie. qui permet de mettre
                 en relation des prestataires de services locaux avec des particuliers 
                 et des entreprises ayant des besoins spécifiques. Ijeni offre une
                  variété de services allant des services de nettoyage et de jardinage
                   aux services de beauté et de bien-être, en passant par les services 
                   de santé et de travaux. </p> 
						</div>
						<div class="desc">
							<h3>Mission &amp; Vission</h3>
							<p>La mission de Servicy en Tunisie est de simplifier et de faciliter
                 l'accès aux services à la demande pour les particuliers et les entreprises
                  en Tunisie, tout en offrant une opportunité aux prestataires de service
                  s locaux de développer leur activité. En permettant aux clients de trouver
                   facilement et rapidement des prestataires de services qualifiés,Servicy vise
                    à améliorer la qualité de vie des Tunisiens et à stimuler l'économie locale.</p> 
							<p>La vision de Servicy est de devenir la référence en matière de services à la
                 demande en Tunisie, en proposant une plateforme en ligne simple, rapide 
                 et fiable pour trouver et réserver des services de qualité..</p>
						</div>
					</div>
					<div class="col-md-7 d-flex align-items-center justify-content-center">
						<img class="img-responsive img-fluid" src={teswira} alt="about" />
					</div>
				</div>
			</div>
    </div>
  
  </div>
  
    </div>
  )
}
