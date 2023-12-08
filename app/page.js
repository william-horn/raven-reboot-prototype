import Image from 'next/image'
import Heading from '@/components/Typography/Heading';
import Text from '@/components/Typography/Text';

export default function Home() {
  return (
    <main>
      <div className="w-[70%] mx-auto">
        <section className="flex flex-col items-center">
          <div className="w-[70%]">
            <Heading className="italic text-center">What is Raven?</Heading>
            <Text className="text-center">
              Raven is a new web application that allows ordinary Wizard101 users to
              search and contribute to game analytics and statistics, such as drop rates
              and distributions.
            </Text>
          </div>

          <div className="relative w-[576px] h-[360px] my-6">
            <Image
            fill
            src="/images/grizzleheim-bg-1.jpg"
            className="bg-white rounded-[50%] p-1"
            />
          </div>

          <Text className="italic text-muted">Website is currently under maintenance</Text>
        </section>
      </div>

    </main>
  );
}
