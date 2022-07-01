export default function(instance) {
    return {
        authMe(headersProp) {
            return instance.get('client/test_auth', {headers: {...headersProp}})
        }
    }
}