import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

const initialState = {
    user: null,
    loading: false
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ name, email, password }) => {
        const response = await createUserWithEmailAndPassword(auth, name, email, password);
        alert("Register Success");
        return response.user;
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }) => {
        const response = await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful");
        return response.user;
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async () => {
        await signOut(auth);
    }
)

export const checkUserLoggedIn = createAsyncThunk(
    'auth/checkUserLoggedIn',
    async () => {
        return new Promise((resolve, reject) => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    resolve(user);
                } else {
                    resolve(null)
                }
            })
        })
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, state => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.pending, state => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(logoutUser.pending, state => {
                state.loading = true;
            })
            .addCase(logoutUser.fulfilled, state => {
                state.loading = false;
                state.user = null;
            })
            .addCase(checkUserLoggedIn.pending, state => {
                state.loading = true;
            })
            .addCase(checkUserLoggedIn.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            });
    }
});

export default authSlice.reducer;

export const selectUser = state => state.auth.user;
export const selectLoading = state => state.auth.loading;
