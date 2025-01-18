import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

export default function Content() {
  return (
    <Container
      sx={{
        marginTop: 2,
        padding: 2,
        display: "flex",
        justifyContent: { sm: "flex-start" },
        alignItems: { sm: "center", md: "flex-start" },
        flexDirection: { xs: "column", sm: "column", md: "row" },
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: { xs: "100%", sm: "80%", md: "60%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
        borderRadius={2}
      >
        <Card
          sx={{
            height: "100%",
            backgroundColor: "#227494",
            boxShadow: 3,
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            height="50%"
            image="https://img.freepik.com/free-photo/collection-old-textbooks-shelf-generated-by-ai_24911-72347.jpg"
            alt="Library"
          />
          <CardContent sx={{ padding: 2 }}>
            <Typography
              variant="h5"
              color="white"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Card 1
            </Typography>
            <Typography variant="body2" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. 
            Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. 
            Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. 
            Vivamus suscipit tortor eget felis porttitor volutpat. 
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
            Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.
            </Typography>

            <Typography variant="body2" color="white" sx={{ marginTop: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. 
            Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. 
            Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. 
            Vivamus suscipit tortor eget felis porttitor volutpat. 
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
            Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "45%" },
          height: "90%",
          padding: { sm: 2 },
          marginTop: { xs: 2, md: 0 },
        }}
        borderRadius={2}
      >
        <Card
          sx={{
            height: "100%",
            backgroundColor: "#89c8d6",
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            height="50%"
            image="https://static.vecteezy.com/system/resources/thumbnails/038/511/391/small_2x/ai-generated-bookshelves-with-warm-lighting-filled-with-books-on-lifelong-learning-free-photo.jpeg"
            alt="Bookshelf"
          />
          <CardContent>
            <Typography
              variant="h5"
              color="black"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Card 2
            </Typography>
            <Typography variant="body2" color="black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. 
            Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. 
            Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. 
            Vivamus suscipit tortor eget felis porttitor volutpat. 
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
            Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
