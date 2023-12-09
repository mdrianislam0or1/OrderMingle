import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const userSchema = z.object({
  userId: z.number().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
  fullName: z
    .object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    })
    .optional(),
  age: z.number().optional(),
  email: z.string().email().optional(),
  photo: z.string().url().optional(),
  isActive: z.boolean().optional(),
  hobbies: z.array(z.string()).optional(),
  address: z
    .object({
      street: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
    })
    .optional(),
});

const orderSchema = z.object({
  productName: z.string().optional(),
  price: z.number().optional(),
  quantity: z.number().optional(),
});

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    userSchema.parse(req.body.user);
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: {
        code: 400,
        description: error as any,
      },
    });
  }
};

export const validateOrder = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    orderSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: {
        code: 400,
        description: error as any,
      },
    });
  }
};

export const validateUserId = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = parseInt(req.params.userId, 10);

    if (isNaN(userId)) {
      throw new Error('Invalid userId');
    }

    userSchema.pick({ userId: true }).parse({ userId });
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: {
        code: 400,
        description: error as any,
      },
    });
  }
};
