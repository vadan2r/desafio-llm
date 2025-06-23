# Node CEP API

This project is a simple Node.js API that allows users to fetch address information based on Brazilian postal codes (CEPs) using the ViaCEP API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/node-cep-api.git
   ```

2. Navigate to the project directory:
   ```
   cd node-cep-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run the following command:
```
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

### Get Address by CEP

- **Endpoint:** `/cep/:cep`
- **Method:** GET
- **Description:** Fetches address information based on the provided CEP.
- **Parameters:**
  - `cep`: The postal code (CEP) to search for.
- **Response:**
  - Returns a JSON object containing the address information.

**Example Request:**
```
GET http://localhost:3000/cep/01001-000
```

**Example Response:**
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7087"
}
```

## License

This project is licensed under the MIT License.