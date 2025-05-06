import Title from '../../components/typography/Title';
import Text from '../../components/typography/Text';
import ContainerBox from '../../components/UI/ContainerBox';
import ContainerGrid from '../../components/UI/ContainerGrid';
const DashboardPage = () => {
  return (
    <ContainerGrid>
      <ContainerBox>
        <Title title="Dashboard" style="PageTitle" />
        <Text>
          Quick stats and overview of your dashboard.
        </Text>
      </ContainerBox>
      <ContainerBox>
        <Title title="Quick Stats" style="SectionTitle" />
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded shadow w-1/3">
            <p className="text-sm text-gray-500">Users</p>
            <p className="text-xl font-bold">1,245</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded shadow w-1/3">
            <p className="text-sm text-gray-500">Sales</p>
            <p className="text-xl font-bold">$12,480</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded shadow w-1/3">
            <p className="text-sm text-gray-500">Active Sessions</p>
            <p className="text-xl font-bold">89</p>
          </div>
        </div>
      </ContainerBox>
    </ContainerGrid>
  );
};

export default DashboardPage;
