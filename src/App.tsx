import {
  CssBaseline,
  List,
  ThemeProvider,
  ListItem,
  createTheme,
} from "@mui/material";
import { FC, useState, useEffect } from "react";
import { getWishes, Wish } from "./services/wishes";
import { WishForm } from "./components/WishForm";
import "./scss/index.scss";

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 600,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#131924",
    },
    primary: {
      main: "#4d88ff",
    },
    secondary: {
      main: "#a9a9a9",
    },
  },
});

export const App: FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    getWishes().then(setWishes);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WishForm />
      <List>
        {wishes.map((wish) => {
          return <ListItem key={wish.name}>{wish.name}</ListItem>;
        })}
      </List>
    </ThemeProvider>
  );
};
