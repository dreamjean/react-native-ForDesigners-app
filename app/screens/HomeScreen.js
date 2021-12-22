import { useQuery } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";

import useAuth from "../auth/useAuth";
import {
  ActivityIndicator,
  Avatar,
  Courses,
  LogoCard,
  SectionCard,
} from "../components";
import Text from "../components/styles/Text";
import { logos } from "../data";
import GET_CARDS_ITEMS from "../query/sectionCards";

const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();
  const { loading, error, data } = useQuery(GET_CARDS_ITEMS);
  const sectionCards = data?.cardsCollection?.items;

  if (loading) return <ActivityIndicator visible={loading} />;
  if (error)
    return (
      <Text body2 dark>
        {Error}
      </Text>
    );

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Avatar
          avatar={user?.photo}
          name={user?.name}
          onAvatarPress={() => navigation.navigate("Settings")}
          onIconPress={() => navigation.navigate("Notifications")}
        />
        <Wrapper>
          <Listing
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 20 }}
          >
            {logos.map((logo, index) => (
              <LogoCard key={index} logo={logo.image} title={logo.text} />
            ))}
          </Listing>

          <SubTitle body1>Continue Learning</SubTitle>

          <Listing
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 20 }}
          >
            {sectionCards.map((card) => (
              <SectionCard
                key={card.id}
                image={card.image.url}
                title={card.title}
                logo={card.logo.url}
                subTitle={card.subTitle}
                caption={card.caption}
                onPress={() => navigation.navigate("Section", card)}
              />
            ))}
          </Listing>
        </Wrapper>
        <SubTitle body1>Popular Courses</SubTitle>
        <Courses />
      </ScrollView>
      <StatusBar style="dark" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
`;

const SubTitle = styled(Text)`
  text-transform: uppercase;

  ${({ theme: { space } }) => ({
    marginLeft: space.l1,
  })}
`;

const Listing = styled.ScrollView``;

const Wrapper = styled.View``;

export default HomeScreen;
