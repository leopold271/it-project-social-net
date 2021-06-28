import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7ae5255d-9d6a-4341-8bef-974d04b6ee6d"
    }
});

export const userApi= {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
            return response.data
        })
    },
    cancelSubscription(id) {
        return instance.delete(`follow/${id}`)
    },
    postSubscription(id) {
        return instance.post(`follow/${id}`)
    },
    getProfile(id) {
        console.warn('obsolete method. Pls use profileAPI obj');
        return profileApi.getProfile(id);
    }
}

export const profileApi= {
    getProfile(id) {
        return instance.get('profile/' + id)
    },
    getStatus(id) {
        return instance.get('profile/status/' + id)
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status})
    }
}

export const authApi = {
    me() {
        return instance.get('auth/me');
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login', )
    }
}
