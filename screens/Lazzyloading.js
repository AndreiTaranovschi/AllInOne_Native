/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';


const LazzyLoading = () => {
  const [data, setData] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [pageCurrent, setpageCurrent] = useState(1)
  useEffect(() => {
    setisLoading(true)
    this.getData()
    return () => {

    }
  }, [pageCurrent])

  getData = async () => {
    const apiURL = "https://picsum.photos/v2/list?page=" + pageCurrent + "&limit=20"
    fetch(apiURL).then((res) => res.json())
      .then((resJson) => {
        setData(data.concat(resJson))
        setisLoading(false)
      })
  }


  renderItem = ({ item }) => {
    return (
      <View style={styles.itemRow}>
        <Image source={{ uri: item.download_url }} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.author}</Text>
      </View>
    )
  }

  renderFooter = () => {
    return (
      isLoading ?
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View> : null
    )
  }
  handleLoadMore = () => {
    setpageCurrent(pageCurrent + 1)
    setisLoading(true)
  }
  return (
    <FlatList
      styles={styles.container}
      numColumns={2}
      data={data}
      renderItem={this.renderItem}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={this.handleLoadMore}
      onEndReachedThreshold={0}
    />
  );
};

export default LazzyLoading;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#f5fcff',
  },
  itemRow: {

  },
  itemImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  itemText: {
    fontSize: 16,
    padding: 5,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center'
  }
})