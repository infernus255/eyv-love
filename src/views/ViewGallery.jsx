import React, { useState, useEffect } from "react";
import { ListGroup, Row, Col, CardGroup } from "react-bootstrap";
import listReactFiles from "list-react-files";

//util functions
import { arrayOfPropValue } from "../util/utilFunctions.js";

//Components
import PhotoCard from "../components/PhotoCard";

//Photos
import foto1 from "../assets/img/eyv/IMG-20190805-WA0010.jpg";
import foto2 from "../assets/img/eyv/IMG-20190805-WA0064.jpg";
import foto3 from "../assets/img/eyv/IMG_20200209_182719.jpg";
import foto4 from "../assets/img/eyv/IMG_20200216_140503.jpg";
import foto5 from "../assets/img/eyv/IMG_20200216_140803.jpg";
import foto6 from "../assets/img/eyv/IMG_20200216_150436.jpg";
import foto7 from "../assets/img/eyv/IMG_20200218_112911.jpg";
import foto8 from "../assets/img/eyv/IMG_20200220_133445.jpg";
import foto9 from "../assets/img/eyv/IMG_20200222_143534.jpg";
import foto10 from "../assets/img/eyv/IMG_20200222_151052.jpg";

function ViewGallery(props) {
  return (
    <div className="view-basic">
      {/* <CardGroup> */}
      <Row>
        <Col xs={12} md={6} lg={4} sm={12} xl={4}>
          <PhotoCard
            key={1}
            title="Viaje a Cordoba"
            text="Aca nos estabamos quedando ciegos por el sol y don miguelon salio en la sombra de la foto"
            src={foto1}
          />
        </Col>
        <Col xs={12} md={6} lg={4} sm={12} xl={4}>
          <PhotoCard
            key={2}
            title="Viaje a Cordoba"
            text="En algun rio. La cosa oxidada esa se colo en la foto"
            src={foto2}
          />
        </Col>
        <Col xs={12} md={6} lg={4} sm={12} xl={4}>
          <PhotoCard
            key={3}
            title="Puerto de Frutos"
            text="Estabamos viendo las olas que hacian los botes y pinto foto"
            src={foto3}
          />
        </Col>



        <Col xs={12} md={6} lg={4} sm={12} xl={4}>
          <PhotoCard
            key={4}
            title="Viaje a Bariloche"
            text="Circuito Chico. Parabamos a cada rato en la bici solo por las super vistas, no por que estuvieramos cansados, o si"
            src={foto4}
          />
        </Col>
        <Col xs={12} md={6} lg={4} sm={12} xl={4}>
          <PhotoCard
            key={5}
            title="Viaje a Bariloche"
            text="Circuito Chico. Selfie bajo el sol que tiernis"
            src={foto5}
          />
        </Col>
        <Col xs={12} md={6} lg={4} sm={12} xl={4}>
          <PhotoCard
            key={6}
            title="Viaje a Bariloche"
            text="Circuito Chico. Molestabamnos a la gente para que nos saque fotos como dice el libro del viajero"
            src={foto6}
          />
        </Col>

        <Col xs={12} md={6} lg={4} sm={12} xl={4}>
          <PhotoCard
            key={7}
            title="Viaje a Bariloche"
            text="En algun lugar en el micro de rafting. Ese micro era pequeño y te asfixiabas, pero era divertido tener los cascos y chocarnos la cabeza"
            src={foto7}
          />
        </Col>
        <Col xs={12} md={6} lg={4} sm={12} xl={4}>
          <PhotoCard
            key={8}
            title="Viaje a Bariloche"
            text="El bosque de Arrayanes. Sin palabras el mejor paisaje sin dudas, y bueno el lago era lindo tambien"
            src={foto8}
          />
        </Col>
        <Col xs={12} md={6} lg={4} sm={12} xl={4}>
          <PhotoCard
            key={9}
            title="Viaje a Bariloche"
            text="Puerto Blest. En cualquier momento salia bambi de ahi atras, habia un arbol que tenia chorromil años y muchas telas de araña diu "
            src={foto9}
          />
        </Col>

      <Col xs={12} md={6} lg={4} sm={12} xl={4}>
        <PhotoCard
          key={10}
          title="Viaje a Bariloche"
          text="Puerto Blest. Caminando hasta un hotel en el camino habia un arroyo muy lindo, mejor no les cuento lo que queria hacer ivana, empieza con p y termina con o"
          src={foto10}
        />
      </Col>

    </Row>
      {/* </CardGroup> */}
    </div>
  );
}

export default ViewGallery;
