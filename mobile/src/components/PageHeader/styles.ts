import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257E5',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title:{
    fontFamily: 'Archivo_700Bold',
    color:'#FFF',
    fontSize:24,
    maxWidth:160,
    marginVertical:40,
  }
});

export default styles;
/*
.page-header .top-bar-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;
}

.page-header .top-bar-container a {
  height: 3.2rem;
  transition: opacity 0.2s;
}

.page-header .top-bar-container > img {
  height: 2.4rem;
}

.page-header .top-bar-container a:hover {
  opacity: 0.6;
}

.page-header .header-content {
  width: 90%;
  margin: 3.2rem auto;
  position: relative;
}

.page-header .header-content strong {
  font: 700 3.6rem Archivo;
  line-height: 4.2rem;
  color: var(--color-title-in-primary);
}

.page-header .header-content p {
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--color-text-in-primary);
  margin-top: 2.4rem;
}

@media (min-width: 700px) {
  .page-header {
    height: 340px;
  }

  .page-header .top-bar-container {
    max-width: 1100px;
  }

  .page-header .header-content {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding: 48px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .page-header .header-content strong,
  .page-header .header-content p {
    max-width: 35rem;
  }
}
*/