import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Footer.css';
export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted' style={{ background: '#272A2D' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        <span style={{ color: 'white', fontSize: '20px' }}>Siguenos en nuestras redes sociales:</span>
        </div>

        <div id='div-redes'>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='twitter' />
          </a>
          
          <a href='' className='me-1 text-reset'>
            <MDBIcon color='white' fab icon='instagram' />
          </a>
          
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5' style={{ backgroundColor: '#272A2D', borderRadius: '10px' }}>
<MDBRow className='mt-3'>
  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4 text-center'>
    <h6 className='text-uppercase fw-bold mb-4 ' style={{ color: '#6C757D'}}>
      <img 
        src="https://i.ibb.co/WDPTxmv/UBIFACIL-blanco-10px.png" 
        alt="Logo" 
        className='imagen-footer'
      />
    </h6>
    <p id='texto-paginaturistica'>Pagina turistica.</p>
  </MDBCol>

 

  <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 text-center'>
    <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#EB5B38'}}>Useful links</h6>
    <p>
      <Link to="/Contacto" className='text-reset-footer'>Contacto</Link>
    </p>
    <p>
      <a href='#!' className='text-reset-footer' >Settings</a>
    </p>
    <p>
      <a href='#!' className='text-reset-footer' >Orders</a>
    </p>
    <p>
      <a href='#!' className='text-reset-footer' >Help</a>
    </p>
  </MDBCol>

  <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 text-center'>
    <h6 className='text-uppercase fw-bold mb-4'style={{ color: '#EB5B38'}}>Contacto</h6>
    <p className='text-reset-footer'>
      <MDBIcon color='light' icon='home' className='me-2' />
      San Luis, JK 10012, AR
    </p>
    <p className='text-reset-footer'>
      <MDBIcon color='light' icon='envelope' className='me-3' />
      UbicarFacil@example.com
    </p>
    <p className='text-reset-footer'>
      <MDBIcon color='light' icon='phone' className='me-3' /> + 01 234 567 88
    </p>
    <p className='text-reset-footer'>
      <MDBIcon color='light' icon='print' className='me-3' /> + 01 234 567 89
    </p>
  </MDBCol>
</MDBRow>


        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: '#EB5B38' }}>
        © 2030 Copyright:
        <a className='text-reset fw-bold' href=''>
          UbicarFacil.com
        </a>
      </div>
    </MDBFooter>
  );
}