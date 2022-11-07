import React, { FC, ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <SafeAreaView style={styles.areaView}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  areaView: { flex: 1, backgroundColor: '#123', paddingHorizontal: 10 },
});

export default Container;
