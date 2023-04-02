import "./Booking.css";
import { Text, Heading, Input, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Booking() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();

    const handleClose = () => {
        window.scrollTo(0, 0);
        navigate('/');
    }
  return (
    <div class="container">
      <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">First Name</label>
          </div>
          <div class="col-75">
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Last Name</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="country">Country</label>
          </div>
          <div class="col-75">
            <select id="country" name="country">
              <option value="australia">India</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
              <option value="india">Australia</option>
              <option value="paki">Pakistan</option>
              <option value="paki">China</option>
              <option value="paki">Japan</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Enter Address</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="name"
              name="lastname"
              placeholder="Address"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Pincode</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="name"
              name="lastname"
              placeholder="Enter Pincode"
            />
          </div>
        </div>
        <br />
        <div class="row">
         
            <div id="submit">
              <h3 onClick={onOpen}>Submit</h3>
            </div>
        
        </div>
          </form>
          
          <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader style={{ textAlign: "center" }}>Congratulations Your Order Has Been Confirmed</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqhhhE4AvVAeWurDWPvVSEWAxuIn3iwY-751iKpTDePe5VUO4ZJw-SZ_zue1ipEUxDhY&usqp=CAU" alt="icon" />
                        </div>
                        <Text style={{ textAlign: "center" }}>You can tack your order by using Tracking Id: FA12462801002 </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleClose}>
                            Go to Home Page
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    </div>
  );
}
