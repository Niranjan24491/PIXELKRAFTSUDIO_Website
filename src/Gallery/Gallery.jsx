// import React, { Component } from "react";
// import { render } from "react-dom";
// import { Thumbnail, Row, Col, Image } from 'react-bootstrap';
// import PreWedding from '../../images/coming-soon.jpg';
// import wedding from '../../images/background.jpg';
// import './Gallery.scss';
// // import MultiGroup from '../MultiScroll/MultiScroll.js';
// import Header from '../Header/Header.jsx';

// const LOREMText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// export default class Gallery extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             contentType: 'preWedding'
//         };
//     }
//     renderThumbnailType1(name, description) {
//         return (
//             <Row className="thumbNailType1">
//                 <Col lg={3} md={6} sm={3} xs={12} lgOffset={1}>
//                     <Thumbnail src={PreWedding} alt="242x200">
//                         <h3>{name}</h3>
//                     </Thumbnail>
//                 </Col>
//                 <Col lg={6} md={6} sm={9} xs={12} lgPull={1} lgOffset={2}>
//                     <p>{description}</p>
//                 </Col>
//             </Row>
//         );
//     }
//     renderThumbnailType2(name, description) {
//         return (
//             <Row className="thumbNailType2">
//                 <Col lg={6} md={6} sm={9} xs={12} lgOffset={1}>
//                     <p>{description}</p>
//                 </Col>
//                 <Col lg={3} md={6} sm={3} xs={12} lgPull={1} lgOffset={2}>
//                     <Thumbnail src={PreWedding} alt="242x200">
//                         <h3>{name}</h3>
//                     </Thumbnail>
//                 </Col>
//             </Row>
//         );
//     }

//     onlistClick(type) {
//         this.setState({
//             contentType: type
//         });
//     }
//     render() {
//         return (
//             <div>
//                 {this.renderThumbnailType1('Pre wedding Shoot', LOREMText)}
//                 {this.renderThumbnailType2('Wedding Shoot', LOREMText)}
//                 {this.renderThumbnailType1('Post Wedding Shoot', LOREMText)}
//                 {this.renderThumbnailType2('Model Shoot', LOREMText)}
//                 {this.renderThumbnailType1('Baby Shower Shoot', LOREMText)}
//                 {this.renderThumbnailType2('Casual Shoot', LOREMText)}
//             </div>
//             // <div>
//             //     {/* <Header /> */}
//             //     <div className="gallery-list">
//             //         <ul>
//             //             <li onClick={(e) => this.onlistClick('preWedding')}>Pre Wedding</li>
//             //             <li onClick={(e) => this.onlistClick('wedding')}>Wedding</li>
//             //             <li onClick={(e) => this.onlistClick('postWedding')}>Post Wedding</li>
//             //             <li onClick={(e) => this.onlistClick('models')}>Models</li>
//             //             <li onClick={(e) => this.onlistClick('babyShower')}>Baby Shower</li>
//             //             <li onClick={(e) => this.onlistClick('candid')}>Candid Pics</li>
//             //         </ul>
//             //     </div>
//             //     {this.state.contentType === 'preWedding' && (<MultiGroup >
//             //         <multiScroll>
//             //             <leftSide>
//             //                 <Image src={wedding} responsive />
//             //         </leftSide>
//             //             <rightSide>
//             //                 page1: Content Right here
//             //         </rightSide>
//             //         </multiScroll>
//             //         <multiScroll>
//             //             <leftSide>
//             //                 Page2: Content Left here
//             //         </leftSide>
//             //             <rightSide>
//             //                 Page2: Content Right here
//             //         </rightSide>
//             //         </multiScroll>
//             //         <multiScroll>
//             //             <leftSide>
//             //                 Page3: Content Left here
//             //         </leftSide>
//             //             <rightSide>
//             //                 Page3: Content Right here
//             //         </rightSide>
//             //         </multiScroll>
//             //     </MultiGroup>
//             //     )}
//             //     {this.state.contentType === 'wedding' && (<MultiGroup >
//             //         <multiScroll>
//             //             <leftSide>
//             //                 Page1:wedding
//             //         </leftSide>
//             //             <rightSide>
//             //                 page1: Content Right here
//             //         </rightSide>
//             //         </multiScroll>
//             //         <multiScroll>
//             //             <leftSide>
//             //                 Page2: Content Left here
//             //         </leftSide>
//             //             <rightSide>
//             //                 Page2: Content Right here
//             //         </rightSide>
//             //         </multiScroll>
//             //         <multiScroll>
//             //             <leftSide>
//             //                 Page3: Content Left here
//             //         </leftSide>
//             //             <rightSide>
//             //                 Page3: Content Right here
//             //         </rightSide>
//             //         </multiScroll>
//             //     </MultiGroup>
//             //     )}
//             // </div>
//         )
//     }
// }