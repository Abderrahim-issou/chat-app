import { token } from "morgan";
import z from "zod";


export const registerSchema = z.object({
    fullName: z.string(), 
    email: z.string().email(),
    password: z.string(),
        // .min(8, "Password must be at least 8 characters long")
        // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        // .regex(/[0-9]/, "Password must contain at least one number")
        // .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)"),
    profilePic: z.string().optional()
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
        // .min(8, "Password must be at least 8 characters long")
        // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        // .regex(/[0-9]/, "Password must contain at least one number")
        // .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)")
});

export const resetPassswordSchema = z.object({
    email: z.string().email()
});
export const resetConfirmSchema = z.object({
    password: z.string(),
        // .min(8, "Password must be at least 8 characters long")
        // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        // .regex(/[0-9]/, "Password must contain at least one number")
        // .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)"),
    token: z.string()
});

export type loginDto = z.infer<typeof loginSchema>;
export type registerDto = z.infer<typeof registerSchema>;
export type resetDto = z.infer<typeof resetPassswordSchema>;
export type confirmDto = z.infer<typeof resetConfirmSchema>;