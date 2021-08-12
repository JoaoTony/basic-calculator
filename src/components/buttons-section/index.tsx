import React, {FC} from "react";
import { data } from "../../constants/data";
import Button from "../button";

import { Container, Column, Row } from './button-section.styles'

const ButtonSection: FC = () => {
  return(<Container>
    <Row>
      {data.top.map((item, index) => 
        <Button 
        text={item} 
        type="operator" 
        leftTop={index === 0} 
        rightTop={index === data.top.length - 1}
      />
      )}
    </Row>
    <Row>
    <Column>
      {[0, 1, 2, 3].map(item => 
      <Row>
        {data.numbers.map((element, index) => 
        index >= item * 3 && index < (item + 1) * 3 ? 
        (<Button 
        text={element} 
        type="number" 
        />) : null
      )}
      
      </Row>)}
    </Column>
    <Column>
    {data.right.map((item, index) => 
        <Button 
        text={item} 
        type={index === data.right.length - 1 ? 'equal' : 'operator'}
      />
      )}
    </Column>
    </Row>  
  </Container>)
}

export default ButtonSection;