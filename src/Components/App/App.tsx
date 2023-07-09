import MainPage from '../../Pages/Main-page/Main-page';

type AppMainProps = {
  cardsCount: number;
};

function AppMain({cardsCount}: AppMainProps): JSX.Element {
  return (
    <MainPage cardsCount={cardsCount} />
  );
}

export default AppMain;
