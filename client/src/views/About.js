import React from 'react';
import {
  Card,
  Row,
  Col,
  CardTitle,
  Container,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table,
  List,
  TextField,
} from "reactstrap";
import ComponentCard from '../components/ComponentCard';
import Logo from '../layouts/imgs/HDSOFTlogo.png'

const About = () => {
  // const features = [
  //   {
  //     title: 'Create React App Based',
  //     desc: 'Create React App is a tool that gives you a massive head start when building React apps.',
  //     icon: 'bi-vinyl',
  //   },
  //   {
  //     title: 'React Hooks',
  //     desc: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components.',
  //     icon: 'bi-umbrella',
  //   },
  //   {
  //     title: 'CASL',
  //     desc: 'It is isomorphic authorization JavaScript library which restricts what resources a given client is allowed to access.',
  //     icon: 'bi-lock',
  //   },
  //   {
  //     title: 'Dark & Light Layouts',
  //     desc: 'This theme comes with built-in light & dark layouts, select as per your preference.',
  //     icon: 'bi-brightness-high',
  //   },
  //   {
  //     title: 'Built-in Customizer',
  //     desc: 'Built-in customizer enables users to change their admin panel look & feel based on their preferences.',
  //     icon: 'bi-gear',
  //   },
  //   {
  //     title: 'Well Crafted Apps',
  //     desc: 'Creative & smart well crafted apps like email, chat, todo & calender allows you to create your apps faster.',
  //     icon: 'bi-star',
  //   },
  //   {
  //     title: 'Clean & Modern Design',
  //     desc: 'Beautifully crafted, clean & modern designed admin theme with 5 different demos & light - dark versions.',
  //     icon: 'bi-brush',
  //   },
  //   {
  //     title: 'Easy Navigation',
  //     desc: 'Carefully crafted, clean, smart & easy theme navigation with collapsible option.',
  //     icon: 'bi-segmented-nav',
  //   },
  //   {
  //     title: 'No jQuery Dependency',
  //     desc: 'jQuery is great JS library, But Its not a great idea to use jQuery and React in the same UI.',
  //     icon: 'bi-shield-check',
  //   },
  //   {
  //     title: 'Colors Options',
  //     desc: 'Unlimited color options allows you to set your application color as per your branding.',
  //     icon: 'bi-droplet-half',
  //   },
  //   {
  //     title: 'Code Splitting',
  //     desc: 'To avoid winding up with a large bundle, it’s good to get ahead of the problem and use "Code Splitting".',
  //     icon: 'bi-file-code',
  //   },
  //   {
  //     title: 'Lazy Loading',
  //     desc: 'Its more efficient to split each routes components into a separate chunk, and only load them when the route is visited.',
  //     icon: 'bi-arrow-clockwise',
  //   },
  //   {
  //     title: 'Continuous Updates',
  //     desc: 'Regular updates with new demos and features is guaranteed',
  //     icon: 'bi-bag-check',
  //   },
  //   {
  //     title: 'Quality Code',
  //     desc: 'We follow the best industry code structure that all developers will be able to pick up easily and fall in love',
  //     icon: 'bi-stars',
  //   },
  //   {
  //     title: 'Support',
  //     desc: 'Premium customer support from the actual people who have created.',
  //     icon: 'bi-person-check',
  //   },
  // ];
  return (
    // <Row>
    //   <Col>
    //     {/* --------------------------------------------------------------------------------*/}
    //     {/* Card-1*/}
    //     {/* --------------------------------------------------------------------------------*/}
    //     <ComponentCard
    //       title="Xtreme React Admin Pro Version"
    //       subtitle={
    //         <p>
    //           5 premium and highly customizable demo variations included in the package, with React
    //           Router 6, Redux Toolkit, Axios nd much more...
    //         </p>
    //       }
    //     >
          
    //       <Row>
    //         <Col lg="8">
    //           <div className="mt-3">
    //             <Button
    //               color="primary"
    //               href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
    //               target="_blank"
    //             >
    //               Buy Now
    //             </Button>
    //           </div>
    //         </Col>
    //       </Row>
    //     </ComponentCard>
    //     <ComponentCard title="Features">
    //       <Row>
    //         {features.map((feature) => (
    //           <Col lg="4" className="mb-5 pb-3" key={feature.title}>
    //             <div>
    //               <i className={`bi ${feature.icon} text-primary fs-2`} />

    //               <CardTitle tag="h4" className="my-3">
    //                 {feature.title}
    //               </CardTitle>
    //               <CardSubtitle className="text-muted col-10">{feature.desc}</CardSubtitle>
    //             </div>
    //           </Col>
    //         ))}
    //       </Row>
    //     </ComponentCard>
    //   </Col>
    // </Row>

    <div><div align='center' ><Row className="mt-3"><a href="/">
    <img  src={Logo} alt="" srcset="" width={400} />
  </a></Row></div>
      <div className="main">
    <h1 className='text-center'>Support</h1>
    <div className="search">
      <Input 
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
        placeholder='Find help....'
      />
    </div>
    <List />
  </div>
  <h1 className='text-center'>Popular Searches:</h1>
              <div className="button"><Row className="mt-3">
              <Col xs="6" sm="4">
                <Button className="btn bg-secondary bg-gradient text-white rounded-5" size="lg">
                  How to add Employees?
                </Button></Col><Col xs="6" sm="4">
                <Button className="btn bg-secondary bg-gradient text-white rounded-5" size="lg">
                  How to assign task to employees?
                </Button></Col>
                <Col sm="4">
                <Button className="btn bg-secondary bg-gradient text-white rounded-5" size="lg">
                  How to assign task to employees?
                </Button></Col></Row>
              </div>
          
      </div>
  );
};

export default About;
