import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';

//component imports
import Boxes from './components/Boxes';
import Colors from './Assets/Colors';

const App = () => {
  const [A, setA] = useState(null);
  const [B, setB] = useState(null);
  const [C, setC] = useState(null);
  const [D, setD] = useState(null);
  const [E, setE] = useState(null);
  const [F, setF] = useState(null);
  const [G, setG] = useState(null);
  const [H, setH] = useState(null);
  const [I, setI] = useState(null);
  const [player, setPlayer] = useState();

  const handlePressA = () => {
    if (player == null) {
      setPlayer(1);
      setA('X');
    } else if (player == 1) {
      setPlayer(2);
      setA('O');
    } else if (player == 2) {
      setPlayer(1);
      setA('X');
    } else {
      null;
    }
  };

  const handlePressB = () => {
    if (player == null) {
      setPlayer(1);
      setB('X');
    } else if (player == 1) {
      setPlayer(2);
      setB('O');
    } else if (player == 2) {
      setPlayer(1);
      setB('X');
    }
  };

  const handlePressC = () => {
    if (player == null) {
      setPlayer(1);
      setC('X');
    } else if (player == 1) {
      setPlayer(2);
      setC('O');
    } else if (player == 2) {
      setPlayer(1);
      setC('X');
    }
  };
  const handlePressD = () => {
    if (player == null) {
      setPlayer(1);
      setD('X');
    } else if (player == 1) {
      setPlayer(2);
      setD('O');
    } else if (player == 2) {
      setPlayer(1);
      setD('X');
    }
  };
  const handlePressE = () => {
    if (player == null) {
      setPlayer(1);
      setE('X');
    } else if (player == 1) {
      setPlayer(2);
      setE('O');
    } else if (player == 2) {
      setPlayer(1);
      setE('X');
    }
  };
  const handlePressF = () => {
    if (player == null) {
      setPlayer(1);
      setF('X');
    } else if (player == 1) {
      setPlayer(2);
      setF('O');
    } else if (player == 2) {
      setPlayer(1);
      setF('X');
    }
  };
  const handlePressG = () => {
    if (player == null) {
      setPlayer(1);
      setG('X');
    } else if (player == 1) {
      setPlayer(2);
      setG('O');
    } else if (player == 2) {
      setPlayer(1);
      setG('X');
    }
  };
  const handlePressH = () => {
    if (player == null) {
      setPlayer(1);
      setH('X');
    } else if (player == 1) {
      setPlayer(2);
      setH('O');
    } else if (player == 2) {
      setPlayer(1);
      setH('X');
    }
  };
  const handlePressI = () => {
    if (player == null) {
      setPlayer(1);
      setI('X');
    } else if (player == 1) {
      setPlayer(2);
      setI('O');
    } else if (player == 2) {
      setPlayer(1);
      setI('X');
    }
  };

  const handleResetPress = () => {
    setA(null);
    setB(null);
    setC(null);
    setD(null);
    setE(null);
    setF(null);
    setG(null);
    setH(null);
    setI(null);
    setPlayer();
  };

  const playerWin = () => {
    if (A == B) {
      Alert.alert('player Wins');
    }
  };

  useEffect(() => {
    playerWin();
  }, [player]);

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Boxes
          onPress={handlePressA}
          boxStyles={[styles.boxes, {borderTopWidth: 0, borderLeftWidth: 0}]}
          input={A}
          disable={A !== null ? true : false}
        />
        <Boxes
          boxStyles={[styles.boxes, {borderTopWidth: 0}]}
          onPress={handlePressB}
          input={B}
          disable={B !== null ? true : false}
        />
        <Boxes
          boxStyles={[styles.boxes, {borderTopWidth: 0, borderRightWidth: 0}]}
          onPress={handlePressC}
          input={C}
          disable={C !== null ? true : false}
        />
      </View>
      <View style={styles.boxContainer}>
        <Boxes
          boxStyles={[styles.boxes, {borderLeftWidth: 0}]}
          onPress={handlePressD}
          input={D}
          disable={D !== null ? true : false}
        />
        <Boxes
          boxStyles={styles.boxes}
          onPress={handlePressE}
          input={E}
          disable={E !== null ? true : false}
        />
        <Boxes
          boxStyles={[styles.boxes, {borderRightWidth: 0}]}
          onPress={handlePressF}
          input={F}
          disable={F !== null ? true : false}
        />
      </View>
      <View style={styles.boxContainer}>
        <Boxes
          boxStyles={[styles.boxes, {borderBottomWidth: 0, borderLeftWidth: 0}]}
          onPress={handlePressG}
          input={G}
          disable={G !== null ? true : false}
        />
        <Boxes
          boxStyles={[styles.boxes, {borderBottomWidth: 0}]}
          onPress={handlePressH}
          input={H}
          disable={H !== null ? true : false}
        />
        <Boxes
          boxStyles={[
            styles.boxes,
            {borderBottomWidth: 0, borderRightWidth: 0},
          ]}
          onPress={handlePressI}
          input={I}
          disable={I !== null ? true : false}
        />
      </View>
      <TouchableOpacity onPress={handleResetPress} style={styles.button}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxes: {
    width: 100,
    height: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: Colors.blue,
    width: 80,
    height: 30,
    marginLeft: 157,
  },
  buttonText: {
    color: Colors.white,
  },
});
