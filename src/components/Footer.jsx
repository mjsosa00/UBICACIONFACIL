import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Footer.css';
export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted' style={{ backgroundImage: 'linear-gradient(#213341 20%, #049CB3)' }}>
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
          
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='instagram' />
          </a>
          
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5' style={{ backgroundColor: '#213341', borderRadius: '10px' }}>
<MDBRow className='mt-3'>
  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4 text-center'>
    <h6 className='text-uppercase fw-bold mb-4 ' style={{ color: '#6C757D'}}>
      <img 
        src="https://cdn.discordapp.com/attachments/1179643622153527347/1290007581208871018/UBIFACIL_blanco.png?ex=66fae4ae&is=66f9932e&hm=c81b8785c16a793154b4cca2684b8071af37c182081ad5cc2109e9a193edc544&" 
        alt="Logo" 
        className='imagen-footer'
      />
    </h6>
    <p id='texto-paginaturistica'>Pagina turistica.</p>
  </MDBCol>

  <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 text-center'>
    <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#6C757D'}}>Products</h6>
    <p>
      <a href='#!' className='text-reset-footer'>Angular</a>
    </p>
    <p>
      <a href='#!' className='text-reset-footer' >React</a>
    </p>
    <p>
      <a href='#!' className='text-reset-footer' >Vue</a>
    </p>
    <p>
      <a href='#!' className='text-reset-footer' >Laravel</a>
    </p>
  </MDBCol>

  <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 text-center'>
    <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#6C757D'}}>Useful links</h6>
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
    <h6 className='text-uppercase fw-bold mb-4'style={{ color: '#6C757D'}}>Contacto</h6>
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

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2030 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          UbicarFacil.com
        </a>
      </div>
    </MDBFooter>
  );
}