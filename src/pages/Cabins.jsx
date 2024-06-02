import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import getCabins from "../services/apiCabin";

function Cabins() {
  useEffect(() => {
    getCabins()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    return () => {};
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
