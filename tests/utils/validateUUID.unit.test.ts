import { isValidUUID } from "../../src/utils/validate";


describe('check if valid uuid', () =>{
    it('should return true if valid uuid', () => {
        const validUuid = "92f701ed-7202-4dc6-abee-fb5e4aa53cf6";
        const actuall = isValidUUID(validUuid);
        expect(actuall).toBe(true);
    })
})

describe('check if notvalid uuid', () =>{
    it('should return false if not valid uuid', () => {
        const validUuid = "notValid";
        const actuall = isValidUUID(validUuid);
        expect(actuall).toBe(false);
    })
})