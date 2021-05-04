import React, { memo } from "react";
import COUNTRIES from "../../../commons/constants/countries";
import {
  Button,
  Card,
  MenuItem,
  Select,
  Typography,
} from "../../../components";
import { CardPanelContentStyled, ItemStyled } from "./style";

const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCovidData }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country.${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`Pais.${country.label}`} />
      </ItemStyled>
    </MenuItem>
  );

  const textCovid19 = ` País: ${country} - recuperados: ${recovered}`;

  const shareInfo = () => {
    navigator.share({
      title: `Dados Covid19 - ${country}`,
      text: textCovid19,
      url: "https://localhost:3000",
    });
  };

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  const renderCopyButton = (
    <div>
      <Button variant="container" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  );

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">
            COVID19
          </Typography>
          <Typography variant="h6" component="span" color="primary">
            Painel coronavírus
          </Typography>
          <Typography variant="body2" component="span" color="primary">
            Atualizado em: {updateAt}
          </Typography>

          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Panel);
