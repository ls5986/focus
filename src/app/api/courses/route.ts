import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true }
  });

  if (user?.role !== 'INSTRUCTOR' && user?.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    const json = await request.json();
    const course = await prisma.course.create({
      data: {
        title: json.title,
        description: json.description,
        imageUrl: json.imageUrl,
        price: json.price,
        instructorId: session.user.id,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating course' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const instructorId = searchParams.get('instructorId');
  
  try {
    const courses = await prisma.course.findMany({
      where: instructorId ? { instructorId } : undefined,
      include: {
        instructor: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });

    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching courses' },
      { status: 500 }
    );
  }
} 