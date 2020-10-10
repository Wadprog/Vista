import React from 'react'
import { View, StyleSheet ,Image,Button} from 'react-native'

//custom imports 
import colors from '../config/colors'
import Text from "./AppText"
import AppTextInput from './AppTextInput'
import ListItem from './ListItem'

const Post = ({user, postDetails, style}) => {
    return (
        <View style={[styles.container, style]}>
          <View style={styles.header}>
         <ListItem style={styles.listItem}image={user.image}  title={user.name} subTitle={postDetails.date} />
         {postDetails.description&&<Text style={styles.description}> {postDetails.description}</Text>}
          </View>
        {postDetails.image&& <Image style={styles.image} source={postDetails.image} resizeMode='stretch'/> }

        <View style={styles.reactionsSummary}>
          <View style={styles.summary_reactions}>
            <Text>7</Text>
          </View>

          <View style={styles.sharesComments}>
          <Text>5 comments</Text>
          </View>
        </View>

        <View style={styles.reactionsSummary}>
          <View style={styles.summary_reactions}>
          <Button title='like'/>
          </View>

          <View style={styles.sharesComments}>
          <Button title='comment'/>
          </View>
        </View>
<View style={styles.commentContainer}>
<ListItem style={styles.listItem}image={user.image}  />
<AppTextInput  placeholder='write a comment '/>
</View>

      
      </View>
    )
}

const styles = StyleSheet.create({
  commentContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:7,
  },
    container: {
      backgroundColor: colors.light,
      borderRadius: 20,
      overflow: "hidden",
     
    },

  header:{
    padding:10
  },
    listItem:{
      backgroundColor: colors.light,
    },
    detailsContainer: {
      padding: 20,
    },
    image: {
      width: "100%",
      height: 200,
    },
    subtitle: {
      color: colors.secondary,
      fontWeight: "700",
    },
    reactionsSummary:{
      flexDirection:"row",
      justifyContent:"space-between",
      padding:7,
    }
    ,
    summary:{},
    title: {
      marginBottom: 7,
      fontWeight: "500",
    },
  });
  
export default Post
