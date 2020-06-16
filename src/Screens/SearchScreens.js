import React, { useState } from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import SearchBar from '../Components/SearchBar'
//import { set } from 'react-native-reanimated'
import useResults from '../hooks/useResults'
import ResultsList from '../Components/ResultsList'

const SearchScreen = ()=> {
    const [term, SetTerm]= useState('')
    const [errorMessage, searchApi, results] = useResults();
    
    const filterResultsByPrice = (price) =>{
        return results.filter(result => {
            return result.price === price;
        })
    }
    return(
        <>
            <SearchBar 
                term= {term} 
                onTermChange={SetTerm}
                onTermSubmit = {()=> searchApi(term)}
            />    
            <Text>{term}</Text>
            {errorMessage? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title='Cost effective'
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title='Bit pricier'
                />            
                <ResultsList  
                    results={filterResultsByPrice('$$$')} 
                    title='Big spender'
                />  
                <ResultsList 
                    results={filterResultsByPrice('$$$$')} 
                    title='TOO spender'
                />  
            </ScrollView>
        </>
    )
    
}
const styles = StyleSheet.create ({})

export default SearchScreen 