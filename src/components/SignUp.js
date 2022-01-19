import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "primary.main" }}>
          <AccountCircleOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng ký tài khoản
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <Grid container spacing={2} width={800}>
            <Grid container item xs={6} direction="column">
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nhập họ và tên"
                name="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Nhập địa chỉ email"
                type="email"
                id="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="verify"
                label="Mã xác nhận gmail"
                id="verify"
                InputProps={{
                  endAdornment: (
                    <Button
                      endIcon={<SendIcon />}
                      variant="contained"
                      sx={{ width: 150 }}
                    >
                      Gửi mã
                    </Button>
                  ),
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Nhập mật khẩu"
                type="password"
                id="password"
              />
            </Grid>
            <Grid container item xs={6} direction="column">
              <FormControl fullWidth margin="normal">
                <InputLabel id="male-label">Giới tính</InputLabel>
                <Select required labelId="male-label" id="male" name="male">
                  <MenuItem value="Nam">Nam</MenuItem>
                  <MenuItem value="Nữ">Nữ</MenuItem>
                </Select>
              </FormControl>

              <TextField
                margin="normal"
                required
                name="dateOfBirth"
                label="Ngày sinh nhật"
                type="date"
                InputLabelProps={{ shrink: true }}
                id="dateOfBirth"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="phoneNumber"
                label="Số điện thoại"
                id="phoneNumber"
              />
            </Grid>
          </Grid>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Đăng ký tài khoản
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  );
}
