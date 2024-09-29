import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted' style={{ backgroundImage: 'linear-gradient(#213341 20%, #049CB3)' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5' style={{ backgroundColor: '#213341', borderRadius: '10px' }}>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4 text-center'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src="https://img.freepik.com/vector-premium/logotipo-viaje-recorrido-concepto-montana-avion_2175-160.jpg" alt="Logo" style={{ width: '80px', height: 'auto', marginRight: '8px' }} />
                Ubicar Facil
              </h6>

              <p>
                Pagina turistica.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 text-center'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>Angular</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>React</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Vue</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Laravel</a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 text-center'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to="/Contacto" className='text-reset'>Contacto</Link>
              </p>
              <p>
                <a href='#!' className='text-reset'>Settings</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Orders</a>
              </p>
              <p>
                <a href='#!' className='text-reset'>Help</a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 text-center'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                San Luis, JK 10012, AR
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                UbicarFacil@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>

        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          UbicarFacil.com
        </a>
      </div>
    </MDBFooter>
  );
}