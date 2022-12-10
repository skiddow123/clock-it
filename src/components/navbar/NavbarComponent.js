import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

export default function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <svg id="logo-43" width="160" height="30" viewBox="0 0 160 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M38.5656 1.27465H42.5603V23.0637H49.1333V26.6953H38.5656V1.27465Z" fill="#726BEA" className="ccompli1"></path> <path d="M56.6812 27.0584C54.7202 27.0584 53.2192 26.5016 52.1781 25.3879C51.1371 24.2742 50.6166 22.7006 50.6166 20.6669V7.30297C50.6166 5.26932 51.1371 3.69566 52.1781 2.582C53.2192 1.46833 54.7202 0.911499 56.6812 0.911499C58.6422 0.911499 60.1432 1.46833 61.1843 2.582C62.2253 3.69566 62.7458 5.26932 62.7458 7.30297V20.6669C62.7458 22.7006 62.2253 24.2742 61.1843 25.3879C60.1432 26.5016 58.6422 27.0584 56.6812 27.0584ZM56.6812 23.4269C58.0612 23.4269 58.7512 22.5916 58.7512 20.9211V7.04876C58.7512 5.37826 58.0612 4.54301 56.6812 4.54301C55.3012 4.54301 54.6112 5.37826 54.6112 7.04876V20.9211C54.6112 22.5916 55.3012 23.4269 56.6812 23.4269Z" fill="#726BEA" className="ccompli1"></path> <path d="M71.1125 27.0584C69.1757 27.0584 67.6989 26.5137 66.682 25.4242C65.6652 24.3106 65.1568 22.7248 65.1568 20.6669V7.30297C65.1568 5.24511 65.6652 3.67145 66.682 2.582C67.6989 1.46833 69.1757 0.911499 71.1125 0.911499C73.0493 0.911499 74.5261 1.46833 75.5429 2.582C76.5598 3.67145 77.0682 5.24511 77.0682 7.30297V9.48187H73.2914V7.04876C73.2914 5.37826 72.6014 4.54301 71.2214 4.54301C69.8415 4.54301 69.1515 5.37826 69.1515 7.04876V20.9575C69.1515 22.6038 69.8415 23.4269 71.2214 23.4269C72.6014 23.4269 73.2914 22.6038 73.2914 20.9575V15.9823H71.2941V12.3508H77.0682V20.6669C77.0682 22.7248 76.5598 24.3106 75.5429 25.4242C74.5261 26.5137 73.0493 27.0584 71.1125 27.0584Z" fill="#726BEA" className="ccompli1"></path> <path d="M85.407 27.0584C83.446 27.0584 81.945 26.5016 80.904 25.3879C79.8629 24.2742 79.3424 22.7006 79.3424 20.6669V7.30297C79.3424 5.26932 79.8629 3.69566 80.904 2.582C81.945 1.46833 83.446 0.911499 85.407 0.911499C87.3681 0.911499 88.8691 1.46833 89.9101 2.582C90.9512 3.69566 91.4717 5.26932 91.4717 7.30297V20.6669C91.4717 22.7006 90.9512 24.2742 89.9101 25.3879C88.8691 26.5016 87.3681 27.0584 85.407 27.0584ZM85.407 23.4269C86.787 23.4269 87.477 22.5916 87.477 20.9211V7.04876C87.477 5.37826 86.787 4.54301 85.407 4.54301C84.0271 4.54301 83.3371 5.37826 83.3371 7.04876V20.9211C83.3371 22.5916 84.0271 23.4269 85.407 23.4269Z" fill="#726BEA" className="ccompli1"></path> <path d="M94.1808 1.27465H98.1755V26.6953H94.1808V1.27465Z" fill="#4F46E5" className="ccustom"></path> <path d="M101.167 1.27465H107.05C109.035 1.27465 110.524 1.80727 111.517 2.87252C112.51 3.93776 113.006 5.49931 113.006 7.55717V10.0629C113.006 12.1208 112.51 13.6823 111.517 14.7476C110.524 15.8128 109.035 16.3454 107.05 16.3454H105.162V26.6953H101.167V1.27465ZM107.05 12.7139C107.704 12.7139 108.188 12.5323 108.503 12.1692C108.842 11.806 109.011 11.1887 109.011 10.3171V7.30297C109.011 6.4314 108.842 5.81404 108.503 5.45089C108.188 5.08774 107.704 4.90617 107.05 4.90617H105.162V12.7139H107.05Z" fill="#4F46E5" className="ccustom"></path> <path d="M120.51 27.0584C118.574 27.0584 117.109 26.5137 116.116 25.4242C115.124 24.3106 114.627 22.7248 114.627 20.6669V19.2143H118.404V20.9575C118.404 22.6038 119.094 23.4269 120.474 23.4269C121.152 23.4269 121.66 23.2332 121.999 22.8459C122.362 22.4343 122.544 21.7806 122.544 20.8848C122.544 19.8196 122.302 18.8875 121.818 18.0886C121.334 17.2654 120.438 16.2849 119.13 15.147C117.484 13.6944 116.334 12.3871 115.68 11.225C115.027 10.0387 114.7 8.70715 114.7 7.23034C114.7 5.2209 115.208 3.67145 116.225 2.582C117.242 1.46833 118.719 0.911499 120.656 0.911499C122.568 0.911499 124.009 1.46833 124.977 2.582C125.97 3.67145 126.466 5.24511 126.466 7.30297V8.35611H122.689V7.04876C122.689 6.1772 122.52 5.54773 122.181 5.16037C121.842 4.7488 121.346 4.54301 120.692 4.54301C119.36 4.54301 118.695 5.35405 118.695 6.97613C118.695 7.89611 118.937 8.75557 119.421 9.5545C119.929 10.3534 120.837 11.3218 122.145 12.4597C123.815 13.9123 124.965 15.2318 125.595 16.4181C126.224 17.6044 126.539 18.9964 126.539 20.5943C126.539 22.6764 126.018 24.2742 124.977 25.3879C123.96 26.5016 122.471 27.0584 120.51 27.0584Z" fill="#4F46E5" className="ccustom"></path> <path d="M134.64 27.0584C132.703 27.0584 131.226 26.5137 130.209 25.4242C129.192 24.3106 128.684 22.7248 128.684 20.6669V1.27465H132.679V20.9575C132.679 21.829 132.848 22.4585 133.187 22.8459C133.55 23.2332 134.059 23.4269 134.712 23.4269C135.366 23.4269 135.862 23.2332 136.201 22.8459C136.564 22.4585 136.746 21.829 136.746 20.9575V1.27465H140.595V20.6669C140.595 22.7248 140.087 24.3106 139.07 25.4242C138.053 26.5137 136.576 27.0584 134.64 27.0584Z" fill="#4F46E5" className="ccustom"></path> <path d="M143.44 1.27465H149.142L151.684 19.4685H151.756L154.299 1.27465H160V26.6953H156.223V7.44823H156.151L153.245 26.6953H149.904L146.999 7.44823H146.927V26.6953H143.44V1.27465Z" fill="#4F46E5" className="ccustom"></path> <path d="M0 26.6953C4.91448 26.6953 8.89841 22.7113 8.89841 17.7969C8.89841 12.8824 4.91448 8.89844 0 8.89844V15.1273C1.47433 15.1273 2.66951 16.3225 2.66951 17.7969C2.66951 19.2712 1.47433 20.4664 0 20.4664V26.6953Z" fill="#726BEA" className="ccompli1"></path> <path d="M29.6614 11.8646C28.1408 11.3829 26.5215 11.123 24.8414 11.123C16.0363 11.123 8.89844 18.261 8.89844 27.066C8.89844 27.9498 8.97036 28.8168 9.10862 29.6614H19.0145C18.6609 28.8686 18.4643 27.9903 18.4643 27.066C18.4643 23.544 21.3194 20.6888 24.8414 20.6888C26.7664 20.6888 28.4921 21.5417 29.6614 22.8902V11.8646Z" fill="#A5B4FC" className="ccompli2"></path> <path d="M1.56451 0C2.30225 6.67374 7.9603 11.8646 14.8307 11.8646C21.701 11.8646 27.3591 6.67374 28.0968 0H18.5513C17.962 1.4773 16.5182 2.52121 14.8307 2.52121C13.1431 2.52121 11.6994 1.4773 11.11 0H1.56451Z" fill="#4F46E5" className="ccustom"></path> </svg>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign In</Nav.Link>
            <Button variant="outline-primary">Register</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}