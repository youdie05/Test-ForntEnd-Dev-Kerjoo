import React, { useEffect, useState } from "react";
import { Container, Form, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setProvinsi,
  setKabKota,
  setKecamatan,
  setDesa,
} from "../redux/slices";

const TestSelectPage = () => {
  const dispatch = useDispatch();
  const { provinsi, kabKota, kecamatan, desa } = useSelector(
    (state) => state.app
  );
  const [provinsiList, setProvinsiList] = useState([]);
  const [kabKotaList, setKabKotaList] = useState([]);
  const [kecamatanList, setKecamatanList] = useState([]);
  const [desaList, setDesaList] = useState([]);

  useEffect(() => {
    // Fetch provinsi data
    fetch("https://api.kerjoo.com/api/v1/reference/provinces")
      .then((response) => response.json())
      .then((data) => setProvinsiList(data));
  }, []);

  useEffect(() => {
    // Fetch kab/kota data when provinsi changes
    if (provinsi) {
      fetch(`https://api.kerjoo.com/api/v1/reference/regencies_of/${provinsi}`)
        .then((response) => response.json())
        .then((data) => setKabKotaList(data));
    }
  }, [provinsi]);

  useEffect(() => {
    // Fetch kecamatan data when kab/kota changes
    if (kabKota) {
      fetch(`https://api.kerjoo.com/api/v1/reference/districts_of/${kabKota}`)
        .then((response) => response.json())
        .then((data) => setKecamatanList(data));
    }
  }, [kabKota]);

  useEffect(() => {
    // Fetch desa data when kecamatan changes
    if (kecamatan) {
      fetch(`https://api.kerjoo.com/api/v1/reference/villages_of/${kecamatan}`)
        .then((response) => response.json())
        .then((data) => setDesaList(data));
    }
  }, [kecamatan]);

  const handleProvinsiChange = (event) => {
    dispatch(setProvinsi(event.target.value));
    dispatch(setKabKota(null));
    dispatch(setKecamatan(null));
    dispatch(setDesa(null));
  };

  const handleKabKotaChange = (event) => {
    dispatch(setKabKota(event.target.value));
    dispatch(setKecamatan(null));
    dispatch(setDesa(null));
  };

  const handleKecamatanChange = (event) => {
    dispatch(setKecamatan(event.target.value));
    dispatch(setDesa(null));
  };

  const handleDesaChange = (event) => {
    dispatch(setDesa(event.target.value));
  };

  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formProvinsi">
            <Form.Label>Provinsi</Form.Label>
            <Form.Control
              as="select"
              value={provinsi || ""}
              onChange={handleProvinsiChange}
            >
              <option value="">Pilih Provinsi</option>
              {provinsiList.map((prov) => (
                <option key={prov.id} value={prov.id}>
                  {prov.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formKabKota">
            <Form.Label>Kab/Kota</Form.Label>
            <Form.Control
              as="select"
              value={kabKota || ""}
              onChange={handleKabKotaChange}
            >
              <option value="">Pilih Kab/Kota</option>
              {kabKotaList.map((kab) => (
                <option key={kab.id} value={kab.id}>
                  {kab.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formKecamatan">
            <Form.Label>Kecamatan</Form.Label>
            <Form.Control
              as="select"
              value={kecamatan || ""}
              onChange={handleKecamatanChange}
            >
              <option value="">Pilih Kecamatan</option>
              {kecamatanList.map((kec) => (
                <option key={kec.id} value={kec.id}>
                  {kec.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formDesa">
            <Form.Label>Desa</Form.Label>
            <Form.Control
              as="select"
              value={desa || ""}
              onChange={handleDesaChange}
            >
              <option value="">Pilih Desa</option>
              {desaList.map((des) => (
                <option key={des.id} value={des.id}>
                  {des.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </Form>
    </Container>
  );
};

export default TestSelectPage;
