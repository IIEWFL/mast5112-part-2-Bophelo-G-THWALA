import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={WelcomePage} />
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Order' component={OrderPage} />
        <Stack.Screen name='AddItems' component={AddItemsPage} />
        <Stack.Screen name='Filter' component={FilterPage} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false
      }
    ).start();
  }, [fadeAnim])
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}


function WelcomePage({ navigation }) {

  /*<View style={styles.container}>
               <Image source={require('./assets/NewsletterWelcomeLogo.jpeg')} />
    </View>*/

  return (
    <View>
      <SafeAreaView>
        <ScrollView>

          {/*--Logo Reference --

            Obtained From: Istock

            Link: https://www.istockphoto.com/vector/table-knife-and-fork-utensils-indicating-a-diner-or-food-vector-gm1220651340-357513069

            Author: Grace Maina

            Author Profile: 
            
          */}

          <View style={styles.container}>
            <Image source={require('./assets/RestaurantLogo.jpg')} />
          </View>

          <View>
            <Text style={styles.title}>Welcome to the Restaurant App</Text>
          </View>



          <View>
            <Text>{'\n'}</Text>
            <Text style={styles.titleText}>Press the "Next Page" Button to access our menu</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.nextPageButton} onPress={() => { navigation.navigate('Home') }}>
              <Text style={styles.nextPageText}>Next Page</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>

  );
}

function HomePage({ navigation }) {

  const [appetizer, setAppetizer] = useState(6)

  const [main, setMain] = useState(8)

  const [dessert, setDessert] = useState(8)

  const [beverages, setBeverages] = useState(10)

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <FadeInView>
            <View>
              <Text style={styles.menuTitle}>Menu</Text>
            </View>

            {/* Appetizers - start */}

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text style={styles.appetizersText}>Appetizers [{appetizer}]</Text>
            </View>


            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*A1*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/LoadedDevliledEggs.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Devilied Eggs {'\n'}{'\n'}
                  Description: These are devilied eggs that taste good, with any {'\n'}
                  toppings you like.{'\n'}{'\n'}
                  Price: R 15.00
                </Text>
              </View>
            </View>


            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*A2*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Bacon-pimientoGuacamole.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Bacon-pimientoGuacamole{'\n'}{'\n'}
                  Description: Guacamole mixed with different and can be spicy {'\n'}{'\n'}
                  Price: R 30.00
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*A3*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/BuffaloChickenDip.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Buffalo Chicken Dip {'\n'}{'\n'}
                  Description: A tasty meal filled with chicken and dip that you {'\n'}
                  can enjoy.{'\n'}{'\n'}
                  Price: R 35.00
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*A4*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/HotBrownPartyRolls.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Hot Brown Party Rolls {'\n'}{'\n'}
                  Description: Hots rolls with ham, meat, polony ready to be{'\n'}
                  served.{'\n'}{'\n'}
                  Price: R 26.40
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*A5*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/HotCheesyCrabDip.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Hot Cheesy Crab Dip {'\n'}{'\n'}
                  Description: Basically a chesse-like and maybe some crab food {'\n'}
                  that can as well tasty for consumers.{'\n'}{'\n'}
                  Price: R 22.50
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*A6*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/TinyTacos.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Tiny Tacos {'\n'}{'\n'}
                  Description: Food from mexico, that you can enjoy spicy, mild{'\n'}
                  toppings you like.{'\n'}{'\n'}
                  Price: R 21.00
                </Text>
              </View>
            </View>

            {/*Appetizers - End*/}

            {/*Main Course - Start*/}

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text style={styles.appetizersText}>Main Course [{main}]</Text>
            </View>


            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*M1*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Beefy Lasagna.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Beefy Lasagna {'\n'}{'\n'}
                  Description: Tasty lasagna, an italian course can be a delicacy {'\n'}
                  to most countries in the world.{'\n'}{'\n'}
                  Price: R 40.00
                </Text>
              </View>
            </View>


            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*M2*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Brisket w Carrots.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Brisket w/ Carrots{'\n'}{'\n'}
                  Description: A main course meal that has carrots along with{'\n'}
                  soups.{'\n'}{'\n'}
                  Price: R 46.00
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*M3*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Broccolini Chic n Rice.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Broccolini Chicken and Rice {'\n'}{'\n'}
                  Description: Lasagna or mac n cheese like dish that is tasty with{'\n'}
                  chicken and rice combinations.{'\n'}{'\n'}
                  Price: R 50.00
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*M4*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/mac n cheese.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Macaroni and Cheese {'\n'}{'\n'}
                  Description: Originated in italy, it is a dish of pasta and cheese {'\n'}
                  sauce, traditionally using macaroni and cheddar, {'\n'}
                  baked in a casserole or sometimes cooked on a stovetop.{'\n'}{'\n'}
                  Price: R 55.00
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*M5*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Roast Chicken w Veggies.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Roast Chicken w/ Veggies {'\n'}{'\n'}
                  Description: Roasted mouth-watering chicken dipped in any {'\n'}
                  or assorted kind of vegetables for you to enjoy.{'\n'}{'\n'}
                  Price: R 35.00
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*M6*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Roasted Lamb.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Roasted Lamb {'\n'}{'\n'}
                  Description: Fried lamb with herbs and vegetables for customers {'\n'}
                  to enjoy along with avocado dipping sauce.{'\n'}{'\n'}
                  Price: R 42.00
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*M7*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Shrimp.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Prawn Shrimps {'\n'}{'\n'}
                  Description: A dish with prawns and shrimps for sea-food to{'\n'}
                  taste and eat.{'\n'}{'\n'}
                  Price: R 20.00
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*M8*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Tenderloin w cream.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Tenderloin w/ Cream {'\n'}{'\n'}
                  Description: Well-Cooked tenderlion meat and cream to be {'\n'}
                  served.{'\n'}{'\n'}
                  Price: R 22.50
                </Text>
              </View>
            </View>

            {/* Main Course - End*/}

            {/*Desserts - start */}

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text style={styles.appetizersText}>Desserts [{dessert}]</Text>
            </View>


            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*D1*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Ambrosia Trifle.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Ambrosia Trifle {'\n'}{'\n'}
                  Description: Tasty cake, whipped cream, strawberry in a cup {'\n'}
                  with jelly as well.{'\n'}{'\n'}
                  Price: R 10.20
                </Text>
              </View>
            </View>


            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*D2*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Cheesecake fruit salad.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Cheese Fruit Salad{'\n'}{'\n'}
                  Description: A fruit salad consisting of a mixture of  different{'\n'}
                  fruit mixed and stirred in cream{'\n'}{'\n'}
                  Price: R 15.40
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*D3*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Chocolate poke cake.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Chocolate Poke Cake {'\n'}{'\n'}
                  Description: A well-baked chocolate cake cut into pieces {'\n'}
                  that may resemble brownies.{'\n'}{'\n'}
                  Price: R 16.30
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*D4*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Coconut Cupcakes.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Coconut Cupcakes {'\n'}{'\n'}
                  Description: Coconut flavoured cupcakes with some bird-egg {'\n'}
                  sweets and some icing on them.{'\n'}{'\n'}
                  Price: R 9.70
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*D5*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Hot cross buns.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Hot Cross Buns {'\n'}{'\n'}
                  Description: Type of dessert enjoyed by people as a delicacy {'\n'}
                  typically on easter every year.{'\n'}{'\n'}
                  Price: R 17.10
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*D6*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Patch Cake.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Patch Cake {'\n'}{'\n'}
                  Description: A brownie-like cake with strawberry and icing{'\n'}
                  for customers to enjoy.{'\n'}{'\n'}
                  Price: R 19.80
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*D7*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Strawberry Jelly cake.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Strawberry Jelly Cake {'\n'}{'\n'}
                  Description: A normal cake with strawberry and jelly added on{'\n'}
                  to it.{'\n'}{'\n'}
                  Price: R 13.90
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*D8*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Strawberry pound cake.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Strawberry Pound Cake {'\n'}{'\n'}
                  Description: Another strawberry kind of dessert for customers {'\n'}
                  to enjoy.{'\n'}{'\n'}
                  Price: R 21.20
                </Text>
              </View>
            </View>

            {/* Dessert - end */}

            {/* Beverages - start */}

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text style={styles.appetizersText}>Beverages [{beverages}]</Text>
            </View>


            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*B1*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Chocolate-Milkshake.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Chocolate Milkshake {'\n'}{'\n'}
                  Description: Chocolate-flavoured milkshake enjoyed by many  {'\n'}
                  (kids included).{'\n'}{'\n'}
                  Price: R 10.10
                </Text>
              </View>
            </View>


            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*B2*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Coca-Cola.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Coca-Cola (Coke){'\n'}{'\n'}
                  Description: A normal flavoured cola for customers to drink {'\n'}
                  could also come in as (coke-zero, sugar-free){'\n'}{'\n'}
                  Price: R 11.00
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*B3*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Coffee.png')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Black Coffee {'\n'}{'\n'}
                  Description: A normal coffee for my morning lovers or{'\n'}
                  morning people (can add milk and sugar).{'\n'}{'\n'}
                  Price: R 8.50
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*B4*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/CoffeeLatte.png')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Coffee (Latte) {'\n'}{'\n'}
                  Description: A brewed coffee that morning people can enjoy as {'\n'}
                  well.{'\n'}{'\n'}
                  Price: R 10.60
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*B5*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Fanta.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Orange Cooldrink (Fanta) {'\n'}{'\n'}
                  Description: Fanta-flavoured drink to cool yourselves down in{'\n'}
                  the hot-summer times.{'\n'}{'\n'}
                  Price: R 9.10
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*B6*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Iced-Tea.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Iced Tea {'\n'}{'\n'}
                  Description: Frozen-flavoured tea people enjoy if they do not{'\n'}
                  enjoy hot beverages very much.{'\n'}{'\n'}
                  Price: R 8.20
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*B7*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Rooibos-Tea.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Rooibos Tea {'\n'}{'\n'}
                  Description: First Kind of tea invented as people do always {'\n'}
                  enjoy (can add sugar, even milk).{'\n'}{'\n'}
                  Price: R 6.40
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*B8*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Strawberry-Milkshake.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Strawberry Milkshake {'\n'}{'\n'}
                  Description: Starwberry-flavoured milkshake enjoyed by many  {'\n'}
                  (kids included).{'\n'}{'\n'}
                  Price: R 10.10
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>


            <View style={styles.itemBackground}>{/*B9*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Vanilla-Milkshake.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Vanilla Milkshake {'\n'}{'\n'}
                  Description: Vanilla-flavoured milkshake enjoyed by many  {'\n'}
                  (kids included).{'\n'}{'\n'}
                  Price: R 10.10
                </Text>
              </View>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.itemBackground}>{/*B10*/}

              <View style={styles.itemImage}>
                <Image source={require('./assets/Water.jpg')} />
              </View>

              <View>
                <Text style={styles.itemText}>
                  Name: Water {'\n'}{'\n'}
                  Description: Just a glass of water can be also (spring or mineral){'\n'}
                  , anyway you like it.{'\n'}{'\n'}
                  Price: R 12.00
                </Text>
              </View>
            </View>

            {/* Beverages - end */}

            <View>
              <TouchableOpacity style={styles.nextPageButton} onPress={() => { navigation.navigate('Order') }}>
                <Text style={styles.nextPageText}>Start Ordering</Text>
              </TouchableOpacity>
            </View>
          </FadeInView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}


function OrderPage({ navigation, route }) {

  const dishName = route.params?.nameKey || ''

  const dishDescription = route.params?.descriptionKey || ''

  const dishCourse = route.params?.courseKey || ''

  const dishPrice = route.params?.priceKey || ''

  const [orderItems, setOrderItems] = useState([])

  useEffect(() => {
    if (dishName && dishDescription && dishCourse && dishPrice) {
      setOrderItems(prevItems => [
        ...prevItems,
        {
          name: dishName,
          description: dishDescription,
          course: dishCourse,
          price: dishPrice
        }
      ]);
    }
  }, [dishName, dishDescription, dishCourse, dishPrice]);


  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <FadeInView>

            <View>
              <Text style={styles.orderTitle}>Menu (Display and Order)</Text>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text style={styles.itemsOrdered}>Items Ordered: [{orderItems.length}]</Text>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>
            {orderItems.length > 0 ? (
              orderItems.map((item, index) => (
                <View style={styles.arrayBackground} key={index}>
                  <View>
                    <Text>{'\n'}</Text>
                  </View>

                  <View>
                    <Text style={styles.itemsArray}>
                      Name: {item.name} {'\n'} {'\n'}
                      Description: {item.description} {'\n'} {'\n'}
                      Course: {item.course} {'\n'} {'\n'}
                      Price: R {item.price} {'\n'} {'\n'}
                    </Text>
                  </View>
                  
                  <View>
                    <Text>{'\n'}</Text>
                  </View>
                </View>
              ))
            ) : (
              <Text style={styles.itemsArray}>No Item was added</Text>
            )}

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <TouchableOpacity style={styles.addItemButton} onPress={() => { navigation.navigate('AddItems') }}>
                <Text style={styles.addItemsText}>Add Items</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.filterButton} onPress={() => { navigation.navigate('Filter') }}>
                <Text style={styles.filterText}>Filter By Course</Text>
              </TouchableOpacity>
            </View>

          </FadeInView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function AddItemsPage({ navigation }) {

  const [name, setName] = useState('')

  const [description, setDescription] = useState('')

  const [course, setCourse] = useState('select course')

  const [price, setPrice] = useState('')

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <FadeInView>
            <View>
              <Text style={styles.addItemsTitle}>Add Items</Text>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <TextInput style={styles.inputs} placeholder='Enter the dish name' onChangeText={setName} value={name} />
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <TextInput style={styles.inputs} placeholder='Enter the description' onChangeText={setDescription} value={description} />
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View style={styles.pickerView}>
              <Text style={styles.pickerText}>Selected Course Type: {course}</Text>
              <Picker
                selectedValue={course}
                style={styles.picker}
                onValueChange={(course, itemIndex) => setCourse(course)}
              >
                <Picker.Item label="Appetizer" value="appetizer" />
                <Picker.Item label="Main Course" value="main course" />
                <Picker.Item label="Dessert" value="dessert" />
                <Picker.Item label="Beverages" value="beverages" />
              </Picker>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <TextInput style={styles.inputs} placeholder='Enter the price' onChangeText={setPrice} value={price} />
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <TouchableOpacity style={styles.addButton} onPress={() => {
                if (name && description && price && course !== 'select course') {
                  navigation.navigate('Order', {
                    nameKey: name,
                    descriptionKey: description,
                    courseKey: course,
                    priceKey: price
                  });
                } else {
                  alert('Please fill in all the fields');
                }
              }}
              >

                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>

          </FadeInView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function FilterPage({ navigation }) {

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <FadeInView>
            <View>
              <Text style={styles.filterTitle}>Filter By Course</Text>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text style={styles.courseTitle}>Appetizers</Text>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text style={styles.courseTitle}>Main Course</Text>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text style={styles.courseTitle}>Desserts</Text>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text>{'\n'}</Text>
            </View>

            <View>
              <Text style={styles.courseTitle}>Beverages</Text>
            </View>
          </FadeInView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 32,
  },

  titleText: {
    textAlign: 'center',
    fontSize: 24,
  },

  nextPageButton: {
    backgroundColor: '#492267',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#1d2d57',
    height: 40,
    alignItems: 'center',
    borderRadius: 0,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    marginBottom: 25,
    width: 473,
    textAlign: 'center',
    alignSelf: 'center',
  },

  nextPageText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  appetizersText: {
    fontSize: 24,
  },

  /* Styling for the menu */
  itemBackground: {
    padding: 20,
    borderBlockColor: '000000',
    borderRadius: 10,
    borderWidth: 2,
  },

  itemImage: {
    borderRadius: 25,
    padding: 0,
    borderBlockColor: '000000',
    marginHorizontal: 5,
    marginVertical: 8,
    resizeMode: 'contain',
  },

  itemText: {
    position: 'absolute',
    top: -120,
    left: 120,
    fontSize: 16,
  },

  /* Order Page */
  orderTitle: {
    fontSize: 32,
    textAlign: 'center'
  },

  itemsOrdered: {
    fontSize: 32,
  },

  coursesTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  arrayBackground: {
    padding: 10,
    backgroundColor: '#B2BEB5'
  },

  itemsArray: {
    fontSize: 20,
  },

  addItemButton: {
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: '#000000',
    height: 40,
    alignItems: 'center',
    borderRadius: 0,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    marginBottom: 25,
    width: 473,
    textAlign: 'center',
    alignSelf: 'center',
  },

  addItemsText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',

  },

  filterButton: {
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: '#000000',
    height: 40,
    alignItems: 'center',
    borderRadius: 0,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    marginBottom: 25,
    width: 473,
    textAlign: 'center',
    alignSelf: 'center',
  },

  filterText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',

  },

  /* Add Items */

  addItemsTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  inputs: {
    flex: 1,
    color: '#1d2d57',
    marginHorizontal: 35,
    padding: 10,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#000000',
  },

  pickerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center'
  },

  pickerText: {
    fontSize: 20
  },

  picker: {
    height: 50,
    width: 150,
    borderColor: '#000000',
  },

  addButton: {
    backgroundColor: '#808080',
    borderWidth: 2,
    borderColor: '#000000',
    height: 40,
    alignItems: 'center',
    borderRadius: 0,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    marginBottom: 25,
    width: 473,
    textAlign: 'center',
    alignSelf: 'center',
  },

  addButtonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  /* */

  /* Filter Items */

  filterTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  courseTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }

  /* */

});
